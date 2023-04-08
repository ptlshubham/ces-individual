import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-vj',
  templateUrl: './history-vj.component.html',
  styleUrls: ['./history-vj.component.css']
})
export class HistoryVjComponent implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
