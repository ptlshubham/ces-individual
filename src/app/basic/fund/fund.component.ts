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
    })
  }
  getAllDonnerDetails() {
    this.donationService.getAllDonnerDetailsData().subscribe((res: any) => {
      this.donnerData = res;
    })
  }
}
