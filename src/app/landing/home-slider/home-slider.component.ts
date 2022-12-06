import { Component, OnInit } from '@angular/core';
import { WebImageUpload } from 'src/app/core/model/web-image-upload';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  public imageUploader: WebImageUpload[] = [];
  public webImageUpload: WebImageUpload = new WebImageUpload;

  constructor(
  ) { }

  ngOnInit(): void {
  }
 
}
