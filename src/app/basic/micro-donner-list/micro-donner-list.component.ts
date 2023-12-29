import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/core/services/donation.service';

@Component({
  selector: 'app-micro-donner-list',
  templateUrl: './micro-donner-list.component.html',
  styleUrls: ['./micro-donner-list.component.css']
})
export class MicroDonnerListComponent implements OnInit {
  donnerList: any = [];
  p: number = 0;

  constructor(
    private donationService: DonationService
  ) { }

  ngOnInit(): void {
    this.getMicroDonnerDetails();
  }
  getMicroDonnerDetails() {
    this.donnerList = [];
    this.donationService.getVerifiedMicroDonnerDetails().subscribe((res: any) => {
      this.donnerList = res;
      
      for (let i = 0; i < this.donnerList.length; i++) {
        this.donnerList[i].index = i + 1;
      }
    })
  }
}
