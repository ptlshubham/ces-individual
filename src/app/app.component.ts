import { Component, OnInit  } from '@angular/core';
import {  Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  private router : Router;
  constructor (router : Router)
  {
    this.router = router;
  }

      
  ngOnInit() {
    this.router.events.subscribe(x => {
      if(x instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });
  }
  title = 'ces-society';
}
