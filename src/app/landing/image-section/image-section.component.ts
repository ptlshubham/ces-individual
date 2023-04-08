import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.css']
})
export class ImageSectionComponent implements OnInit {
  src = '/assets/images/new/Naman Book.pdf';

  constructor() { }

  ngOnInit(): void {

  }

}
