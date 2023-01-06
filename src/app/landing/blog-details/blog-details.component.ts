import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogId: any;
  blogsData: any = [];
  bDetails: any = {};
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    margin:10,
    // autoHeight: true,
    // autoWidth: true,
    navSpeed: 800,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  slides = [
    {
      id: '1',
      img: "assets/images/guiness.png",
      title: 'Longest human representation of a mathematical equation',
      link: 'https://www.guinnessworldrecords.com/world-records/376155-longest-human-representation-of-a-mathematical-equation'
    },
    
    {
      id: '3',
      img: "assets/images/it.png",
      title: 'Education society claims to have set 8 world records in Guj',
      link: 'https://www.indiatoday.in/pti-feed/story/education-society-claims-to-have-set-8-world-records-in-guj-579326-2016-03-26'
    },
    {
      id: '2',
      img: "assets/images/guiness.png",
      title: 'Most people playing sudoku simultaneously',
      link: 'https://www.guinnessworldrecords.com/world-records/most-people-playing-sudoku-simultaneously'
    },
    {
      id: '4',
      img: "assets/images/011.png",
      title: 'Education society claims to have set 8 world records in Guj',
      link: 'https://www.business-standard.com/article/pti-stories/education-society-claims-to-have-set-8-world-records-in-guj-116032600551_1.html'
    },
    {
      id: '5',
      img: "assets/images/toi.png",
      title: 'Anand-based institute sets 8 world records in a year',
      link: 'https://timesofindia.indiatimes.com/city/ahmedabad/Anand-based-institute-sets-8-world-records-in-a-year/articleshow/51568209.cms'
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.blogId = params['id'];
      this.getBlogDetails();
    });
  }

  ngOnInit(): void {

  }
  getBlogDetails() {
    this.homeService.getBlogsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.blogsData = res;
      this.bDetails = {};
      this.blogsData.forEach((element: any) => {
        if (element.id == this.blogId) {
          this.bDetails = element;
        }
      });
    })
  }

}
