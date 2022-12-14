import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-facebook-feed',
  templateUrl: './facebook-feed.component.html',
  styleUrls: ['./facebook-feed.component.css']
})
export class FacebookFeedComponent implements OnInit {
  blogsData: any = [];
  constructor(
    private homeService: HomeService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.getBlogDetails();
  }
  getBlogDetails() {
    this.homeService.getBlogsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.blogsData = res;
      debugger
    })
  }
  continueBlog(id:any){
    this.router.navigate(['/home/blog-details', id]);
  }
}
