import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactModel: any = {};
  constructor(
    private homeService: HomeService,
    private toastrMessage:ToastrService
  ) { }

  ngOnInit(): void {
  }
  saveContactUSData() {
    this.contactModel.institute_id = localStorage.getItem('InstituteId');

    this.homeService.saveContactUsDetails(this.contactModel).subscribe((res: any) => {
      if (res == 'success'){
        this.toastrMessage.success('Thank you for valuable feedback.', 'Success', { timeOut: 3000, });
      }
    })
  }
}
