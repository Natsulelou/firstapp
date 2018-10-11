import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
  ){

  }
  openPage2(){
    this.router.navigate[('/page2')];
  }
  goPage(){
    this.router.navigate(['/page2']);
  }
}
