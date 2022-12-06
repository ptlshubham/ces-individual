import { Component, OnInit } from '@angular/core';
import { WebFooter } from 'src/app/core/model/web-footer.model';

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
  ) { 
  }

  ngOnInit(): void {
  }


}
