import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

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
  donate: boolean = false;

  form: FormGroup = new FormGroup({
    donnerName: new FormControl(''),
    contact: new FormControl(''),
    donationAmount: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  submitted = false;
  constructor(
    private homeService: HomeService,
    private toastrMessage: ToastrService,
    private formBuilder: FormBuilder

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
        address: ['', [Validators.required]]
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
  saveDonationData() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    debugger
    this.homeService.saveDonationDetails(this.donationModel).subscribe((res: any) => {

      if (res == 'success') {
        this.submitted = false;
        this.donationModel = {};
        this.donate = true;
        this.toastrMessage.success('Donner data added Successfully.', 'Success', { timeOut: 3000, });
      }

    })
  }
  

}
