import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imagesData: any = [];
  galleryImg: any = [];
  pa: number = 1;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getImagesDataById();
  }
  getImagesDataById() {
    this.galleryImg = [];
    this.homeService.getBannersImagesById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.imagesData = res;
      this.imagesData.forEach((element: any) => {
        if (element.purpose == 'image') {
          this.galleryImg.push(element);
        }
      });
    })

  }
}
