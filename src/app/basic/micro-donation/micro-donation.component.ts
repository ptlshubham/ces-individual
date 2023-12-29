import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DonationService } from 'src/app/core/services/donation.service';
import { HomeService } from 'src/app/core/services/home.services';
import { RazorpayService } from 'src/app/core/services/razorpay.service';

@Component({
  selector: 'app-micro-donation',
  templateUrl: './micro-donation.component.html',
  styleUrls: ['./micro-donation.component.css']
})
export class MicroDonationComponent implements OnInit {
  donationModel: any = {};
  instituteList: any = [];
  startYear = new Date().getFullYear();
  yearRange: any = [];
  paymentId: any;
  paymentData: any = [];

  form: FormGroup = new FormGroup({
    donnerName: new FormControl(''),
    contact: new FormControl(''),
    donationAmount: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    benefit: new FormControl('')
  });
  submitted = false;

  imageUrl: any = "assets/images/file-upload-image.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  cardImageBase64: any;
  taxImage: any = null;
  benefitUnder80G: boolean = false;

  constructor(
    private homeService: HomeService,
    private toastrMessage: ToastrService,
    private formBuilder: FormBuilder,
    private donationService: DonationService,
    private razorpayService: RazorpayService

  ) {
    this.getAllInstituteDetails();
  }
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.yearRange.push(this.startYear - i);
    }
    this.form = this.formBuilder.group(
      {
        donnerName: ['', Validators.required],
        contact: ['', [Validators.required]],
        donationAmount: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        city: ['', [Validators.required]],
        benefit: []
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.instituteList = res;
    })
  }
  uploadFile(event: any) {
    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        const imgBase64Path = reader.result;
        this.cardImageBase64 = imgBase64Path;
        const formdata = new FormData();
        formdata.append('file', file);
        this.homeService.uploadTax80Image(formdata).subscribe((response) => {
          this.taxImage = response;
          this.toastrMessage.success('Image uploaded Successfully.', 'Success', { timeOut: 3000, });
          this.editFile = false;
          this.removeUpload = true;
        })
      }
    }
  }

  options = {
    // "key": "rzp_test_2j2jo8TdvwxDZh",
    "key": "",
    "amount": "",
    "currency": "INR",
    "name": "",
    "description": "Test Transaction",
    "image": "https://www.cesociety.in/assets/images/ces.png",
    "order_id": "",
    "callback_url": "https://www.cesociety.in/#/donation",
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#203154"
    },
    "handler": (response: any) => {
      this.handlePaymentResponse(response);
    }
  };
  payNow() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if (this.taxImage != null) {
      this.donationModel.taxImage = this.taxImage;
    }
    else {
      this.donationModel.taxImage = null;
    }

    let currentAmount = this.donationModel.donationAmount;
    let updatedAmount = currentAmount * 100;
    this.donationModel.updatedAmount = updatedAmount;
    this.options.amount = this.donationModel.updatedAmount
    this.options.name = this.donationModel.donnerName;
    this.options.prefill.name = this.donationModel.donnerName;
    this.options.prefill.email = this.donationModel.email;
    this.options.prefill.contact = this.donationModel.contact;
    this.options.notes.address = this.donationModel.city;
    let rzp1 = new this.donationService.nativeWindow.Razorpay(this.options);
    rzp1.open();
  }
  handlePaymentResponse(response: any) {
    console.log(response);
    if (response.razorpay_payment_id) {
      this.paymentId = response.razorpay_payment_id;
      this.toastrMessage.success('Payment successful Done.', 'Success', { timeOut: 3000, });
      this.donationModel.paymentId = this.paymentId;
      this.homeService.saveDonationDetails(this.donationModel).subscribe((res: any) => {
        if (res == 'success') {
          this.submitted = false;
          this.donationModel = {};
          this.imageUrl = "assets/images/file-upload-image.jpg"
          this.toastrMessage.success('E-Certificate sent Successfully.', 'Success', { timeOut: 3000, });
        }
      })
    } else {
      this.toastrMessage.error('Payment failed', 'Danger', { timeOut: 3000, });
    }
  }

  // This is not used for getPayment from Razorpay it is working completely.

  getPaymentDetails() {
    this.razorpayService.getPaymentDetailsById(this.paymentId).subscribe((data: any) => {
      this.paymentData = data;
    },
      (error: any) => {
        this.toastrMessage.error('Try again', 'Danger', { timeOut: 3000, });
        console.error('Error fetching payment details:', error);
      }
    );
  }
}
