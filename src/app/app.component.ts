import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginFlag: boolean;
  title = 'app';


  constructor() {
    this.loginFlag = true;
  }

  loginAction(): void {
    this.loginFlag = false;
  }
}
