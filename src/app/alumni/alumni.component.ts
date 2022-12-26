import { Component, OnInit } from '@angular/core';
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
  range = [];

  constructor(
    private homeService: HomeService,
    private toastrMessage: ToastrService
  ) {
    this.getAllInstituteDetails();
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.range.push();
    }
  }
  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.instituteList = res;
    })
  }
  saveAlumniData() {

    this.homeService.saveAlumniDetail(this.alumniModel).subscribe((res: any) => {
      if (res == 'success') {
        this.toastrMessage.success('Alumni data added Successfully.', 'Success', { timeOut: 3000, });
      }

    })
  }

}
