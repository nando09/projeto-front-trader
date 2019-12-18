import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  data: any = {};
  emailError: any = '';
  passwordError: any = '';

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {

  }

  login(data) {
    // console.log(data.form.value)
    this.emailError = '';
    this.passwordError = '';
    this.auth.authenticate(data.form.value)
      .then(response => {
        this.data = response;
        // console.log(this.data);
        if (this.data.token) {
          window.sessionStorage.setItem('user', JSON.stringify(response));
          this.router.navigateByUrl('/dashboard/ct');

        } else {
          this.emailError = data.email;
          this.passwordError = data.password;
          // console.log(response)
        }
      })
  }
}
