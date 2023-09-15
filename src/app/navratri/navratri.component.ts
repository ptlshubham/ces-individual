import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navratri',
  templateUrl: './navratri.component.html',
  styleUrls: ['./navratri.component.css']
})
export class NavratriComponent implements OnInit {
  // galleryImg: any = [];
  pa: number = 1;
  galleryImg: any = [
    { img: 'assets/images/navratri/2021.jpg',title:'Navratri 2021' },
    { img: 'assets/images/navratri/2020.jpg',title:'Navratri 2020'},
    { img: 'assets/images/navratri/2019.jpg',title:'Navratri 2019'},
    { img: 'assets/images/navratri/2018.jpg',title:'Navratri 2018'},
    { img: 'assets/images/navratri/2017.jpg',title:'Navratri 2017'},
    { img: 'assets/images/navratri/2016.jpg',title:'Navratri 2016'},
    { img: 'assets/images/navratri/2015.jpg',title:'Navratri 2015'},
    { img: 'assets/images/navratri/2014.jpg',title:'Navratri 2014'},
    { img: 'assets/images/navratri/2013.jpg',title:'Navratri 2013'},
    { img: 'assets/images/navratri/2012.jpg',title:'Navratri 2012'},
    { img: 'assets/images/navratri/2011.jpg',title:'Navratri 2011'},
    { img: 'assets/images/navratri/2010.jpg',title:'Navratri 2010'},
 
  ]
  constructor() { }

  ngOnInit(): void {
    // this.imagesData.forEach((element: any) => {
    //     this.galleryImg.push(element);
    // });
  }

}
