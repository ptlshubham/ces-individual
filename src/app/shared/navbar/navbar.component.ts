
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { WebNavbar } from 'src/app/core/model/web-navbar.model';
import { StaffService } from 'src/app/core/services/staff.services';

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
  staffDataTable: any = [];
  public webNavbarModel: WebNavbar = new WebNavbar;
  navContact: any;
  navEmail: any;
  navLogo: any;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private staffService: StaffService

  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.getStaffDetails();
  }
  moreOpen() {
    this.readMore = true;
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg', scrollable: true },);
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

  searchSchool(id: any) {
    this.router.navigate(['/more/search', id]);

  }
  getStaffDetails() {
    this.staffService.getAllStaffDetailsData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.staffDataTable = res;
      debugger
    })
  }
}
