import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/core/services/donation.service';

@Component({
  selector: 'app-donner-list',
  templateUrl: './donner-list.component.html',
  styleUrls: ['./donner-list.component.css']
})
export class DonnerListComponent implements OnInit {
  donnerData: any = [];
  p: number = 0;

  constructor(
    private donationService: DonationService

  ) { }

  ngOnInit(): void {
    this.getAllDonnerDetails();
  }
  getAllDonnerDetails() {
    this.donationService.getAllDonnerDetailsData().subscribe((res: any) => {
      this.donnerData = res;
      for (let i = 0; i < this.donnerData.length; i++) {
        this.donnerData[i].index = i + 1;
      }
    })
  }
}
