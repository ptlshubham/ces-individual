import { Component, OnInit } from '@angular/core';
import { WebFooter } from 'src/app/core/model/web-footer.model';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public FootDetails: WebFooter[] = [];
  public webFooterModel: WebFooter = new WebFooter;
  FootPhone: any;
  FootEmail: any;
  FootLogo: any;
  FootLink: any;
  FootAddress: any;
  constructor(
    private sharedService: SharedService
  ) { 
    this.getWebFootDetails();
  }

  ngOnInit(): void {
  }
  getWebFootDetails() {
    this.webFooterModel.email = 'cesociety@cesociety.in';

    this.sharedService.getWebFooter(this.webFooterModel).subscribe((data: any) => {
      this.FootDetails = data;
      this.FootPhone=data[0].phone;
      this.FootEmail=data[0].email;
      this.FootLogo=data[0].logo;
      this.FootLink=data[0].links;
      this.FootAddress=data[0].address;
      debugger

    })
  }

}
