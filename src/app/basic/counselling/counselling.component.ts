import { Component, OnInit } from '@angular/core';
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

  constructor(
    private homeService: HomeService,
    private toastrMessage: ToastrService

  ) {
    this.getAllInstituteDetails();
  }

  ngOnInit(): void {
  }
  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.instituteList = res;
    })
  }
  saveAppointementData() {
    this.homeService.saveCounselingDetail(this.counselingModel).subscribe((res: any) => {
      if (res == 'success') {
        this.toastrMessage.success('Appointement added Successfully.', 'Success', { timeOut: 3000, });
      }

    })
  }
}
