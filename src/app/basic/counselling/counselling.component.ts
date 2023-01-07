import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.css']
})
export class CounsellingComponent implements OnInit {
  counselingModel: any = {};
  instituteList: any = [];

  form: FormGroup = new FormGroup({
    selectInst: new FormControl(''),
    name: new FormControl(''),
    division: new FormControl(''),
    message: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl('')
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
    this.form = this.formBuilder.group(
      {
        selectInst: ['', Validators.required],
        name: ['', Validators.required],
        division: ['', Validators.required],
        message: ['', Validators.required],
        contact: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
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
  saveAppointementData() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.homeService.saveCounselingDetail(this.counselingModel).subscribe((res: any) => {
      if (res == 'success') {
        this.submitted = false;
        this.counselingModel = {};
        this.toastrMessage.success('Appointement added Successfully.', 'Success', { timeOut: 3000, });
      }

    })
  }
}
