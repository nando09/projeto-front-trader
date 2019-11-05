import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  emailError = '';
  passwordError = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }


  login(data){
    this.emailError = '';
    this.passwordError = '';
    this.authService.authenticate(data.form.value)
      .then(response => {
        if (response.status) {
          this.emailError = response.email;
          this.passwordError = response.password;
        } else {
          window.sessionStorage.setItem('user', JSON.stringify(response));
          this.router.navigateByUrl('/home');
          // console.log(response)
        }
      })
  };

}
