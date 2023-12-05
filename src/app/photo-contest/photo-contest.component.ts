import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../core/services/home.services';

@Component({
  selector: 'app-photo-contest',
  templateUrl: './photo-contest.component.html',
  styleUrls: ['./photo-contest.component.css']
})
export class PhotoContestComponent implements OnInit {
  photoContestModel: any = {};
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    birthday: new FormControl(''),
  });
  imageUrl: any = "assets/images/file-upload-image.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  cardImageBase64: any;
  contestImage: any = null;

  addMultiImg: any = [];
  val: number = 0;
  photoMultiImage: any = [];

  submitted = false;
  constructor(
    private homeService: HomeService,
    private toastrMessage: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.val++;
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        contact: ['', [Validators.required]],
        birthday: ['', [Validators.required]]
      },
    );
  }
  addMultiList() {
    this.val++;
    this.addMultiImg.push(
      {
        name: this.val,
        multiImageUrl: 'assets/images/file-upload-image.jpg'
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
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
        this.homeService.uploadContestImage(formdata).subscribe((response) => {
          this.contestImage = response;
          this.toastrMessage.success('Image uploaded Successfully.', 'Success', { timeOut: 3000, });
          this.editFile = false;
          this.removeUpload = true;
        })
      }
    }
  }

  uploadMultiFile(event: any, ind: any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result as string;
        image.onload = () => {
          this.addMultiImg[ind].multiImageUrl = reader.result;
          const imgBase64Path = reader.result;
          this.cardImageBase64 = imgBase64Path;
          const formdata = new FormData();
          formdata.append('file', file);
          this.homeService.uploadMultiContestImage(formdata).subscribe((response) => {
            this.toastrMessage.success('Image uploaded Successfully.', 'Success', { timeOut: 3000, });
            this.photoMultiImage.push(response);
            this.addMultiImg[ind].multiImageUrl = 'https://api.cesociety.in' + response;
            this.editFile = false;
            this.removeUpload = true;
          });
        };
      };
    }
  }
  removeServiceList(val: any) {
    this.addMultiImg.splice(val, 1);
  }
  savePhotoDetails() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else {
      this.photoContestModel.image = this.contestImage;
      this.photoContestModel.contestMultiImage = this.photoMultiImage;
      this.homeService.saveContestDetails(this.photoContestModel).subscribe((res: any) => {
        this.photoContestModel = {};
        this.contestImage = null;
        this.photoMultiImage = [];
        this.imageUrl = "assets/images/file-upload-image.jpg";
        this.addMultiImg = [];
        this.submitted = false;
        this.toastrMessage.success('Photo Contest Details added Successfully.', 'Success', { timeOut: 3000, });
      })
    }
  }
}
