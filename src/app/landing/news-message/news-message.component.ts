import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-news-message',
  templateUrl: './news-message.component.html',
  styleUrls: ['./news-message.component.css']
})
export class NewsMessageComponent implements OnInit {
  public newsData: any = [];
  public newsData1: any = [];
  public newsData2: any = [];

  public start: number = 0;
  public end: number = 3;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getNewsDetails();
  }
  getNewsDetails() {
    this.homeService.getNewsDataById(localStorage.getItem('InstituteId')).subscribe((res: any=[]) => {
      this.newsData = res.slice(0,3);
      this.newsData1 = res.slice(3,6);
      this.newsData2 = res.slice(6,9);

    })
  }
}
