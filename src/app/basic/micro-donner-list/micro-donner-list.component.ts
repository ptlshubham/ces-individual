import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/core/services/donation.service';

@Component({
  selector: 'app-micro-donner-list',
  templateUrl: './micro-donner-list.component.html',
  styleUrls: ['./micro-donner-list.component.css']
})
export class MicroDonnerListComponent implements OnInit {
  donnerData: any = [];
  donnerList: any = [];
  p: number = 0;

  constructor(
    private donationService: DonationService
  ) { }

  ngOnInit(): void {
    this.getMicroDonnerDetails();
  }
  getMicroDonnerDetails() {
    this.donnerData = [];
    this.donationService.getVerifiedMicroDonnerDetails().subscribe((res: any) => {
      this.donnerList = res;
      this.donnerList.forEach((element: any) => {
        if (element.isactive == true) {
          this.donnerData.push(element);
        }
      });
      for (let i = 0; i < this.donnerData.length; i++) {
        this.donnerData[i].index = i + 1;
      }
    })
  }
}
