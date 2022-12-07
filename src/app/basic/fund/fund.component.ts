import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/core/services/donation.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  beneficiaryData: any = [];
  donnerData: any = [];
  p: number = 0;
  pa: number = 0;


  constructor(
    private donationService: DonationService
  ) { }

  ngOnInit(): void {
    this.getAllBeneficiaryDetails();
    this.getAllDonnerDetails();
  }
  getAllBeneficiaryDetails() {
    this.donationService.getAllBeneficiaryDetailsData().subscribe((res: any) => {
      this.beneficiaryData = res;
      for (let i = 0; i < this.beneficiaryData.length; i++) {
        this.beneficiaryData[i].index = i + 1;
      }
    })
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
