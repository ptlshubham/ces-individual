import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../core/services/api.service';
import { HomeService } from '../core/services/home.services';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  alumniModel: any = {};
  instituteList: any = [];
  startYear = new Date().getFullYear();
  yearRange: any = [];

  form: FormGroup = new FormGroup({
    selectInst: new FormControl(''),
    alumniname: new FormControl(''),
    cname: new FormControl(''),
    selectYear: new FormControl(''),
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
    for (let i = 0; i < 100; i++) {
      this.yearRange.push(this.startYear - i);
    }
    this.form = this.formBuilder.group(
      {
        selectInst: ['', Validators.required],
        alumniname: ['', Validators.required],
        cname: ['', Validators.required],
        selectYear: ['', Validators.required],
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
  saveAlumniData() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.homeService.saveAlumniDetail(this.alumniModel).subscribe((res: any) => {
      if (res == 'success') {
        this.toastrMessage.success('Alumni data added Successfully.', 'Success', { timeOut: 3000, });
        this.submitted = false;
        this.alumniModel = {};
      }

    })
  }

}
