
import { Component, HostListener } from '@angular/core';
import { WebNavbar } from 'src/app/core/model/web-navbar.model';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isCollapsed = true;
  isSticky: boolean = false;
  public collapsed = true;
  readMore = false;
  public navDetails: WebNavbar[] = [];
  public webNavbarModel: WebNavbar = new WebNavbar;
  navContact: any;
  navEmail: any;
  navLogo: any;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(
    private sharedService: SharedService
  ) {
    this.getWebNavDetails();
  }
  moreOpen() {
    this.readMore = true;
  }

  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  openPopup1() {
    this.displayStyle1 = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.displayStyle1 = "none";
    this.displayStyle2 = "none";
  }
  getWebNavDetails() {
    this.webNavbarModel.name = 'CES';

    this.sharedService.getWebNavbar(this.webNavbarModel).subscribe((data: any) => {
      this.navDetails = data;
      this.navContact=data[0].contact;
      this.navEmail=data[0].email;
      this.navLogo=data[0].logo;
      debugger

    })
  }

}
