import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactModel: any = {};
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }
  saveContactUSData() {
    this.contactModel.institute_id = localStorage.getItem('InstituteId');
     
    this.homeService.saveContactUsDetails(this.contactModel).subscribe((res: any) => {
    })
  }
}
