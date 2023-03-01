import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/core/services/donation.service';

@Component({
  selector: 'app-beneficiary-students',
  templateUrl: './beneficiary-students.component.html',
  styleUrls: ['./beneficiary-students.component.css']
})
export class BeneficiaryStudentsComponent implements OnInit {
  beneficiaryData: any = [];
  beneficiaryMain: any = [];
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
    this.selectedYear = 'Select Year'

  }
  getAllBeneficiaryYearList() {
    this.donationService.getAllBeneficiaryYear().subscribe((res: any) => {
      this.yearData = res;
      debugger
    })
  }
  getAllBeneficiaryDetails() {
    this.donationService.getAllBeneficiaryDetailsData().subscribe((res: any) => {
      this.beneficiaryData = res;
      debugger
      this.beneficiaryMain = res;
      for (let i = 0; i < this.beneficiaryData.length; i++) {
        this.beneficiaryData[i].index = i + 1;
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
