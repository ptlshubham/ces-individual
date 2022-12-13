import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/core/services/donation.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  beneficiaryData: any = [];
  beneficiaryMain: any = [];
  donnerData: any = [];
  yearData: any = [];
  selectedYear: any = '';
  p: number = 0;
  pa: number = 0;


  constructor(
    private donationService: DonationService
  ) {
    this.getAllBeneficiaryYearList();
  }

  ngOnInit(): void {
    this.getAllBeneficiaryDetails();
    this.getAllDonnerDetails();
    this.selectedYear = 'Select Year'
  }
  getAllBeneficiaryDetails() {
    this.donationService.getAllBeneficiaryDetailsData().subscribe((res: any) => {
      this.beneficiaryData = res;
      this.beneficiaryMain = res;
      for (let i = 0; i < this.beneficiaryData.length; i++) {
        this.beneficiaryData[i].index = i + 1;
      }
    })
  }
  getAllBeneficiaryYearList() {
    this.donationService.getAllBeneficiaryYear().subscribe((res: any) => {
      this.yearData = res;
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
  selectYear(val: any) {
    this.beneficiaryData = [];
    this.selectedYear = val;
    this.beneficiaryMain.forEach((element: any) => {
      if (element.year == this.selectedYear) {
        this.beneficiaryData.push(element);
      }
      for (let i = 0; i < this.beneficiaryData.length; i++) {
        this.beneficiaryData[i].index = i + 1;
      }
    });
  }

}
