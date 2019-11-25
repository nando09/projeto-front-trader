import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    private router: Router){
    if(!sessionStorage.getItem('user') && window.location.pathname !=='/cadastro'){
      this.router.navigateByUrl('/login')
    }
    if(sessionStorage.getItem('user') && window.location.pathname =='/login'){
      this.router.navigateByUrl('/proximos')
    }
  }
  title = 'NewTraderClient';
}
