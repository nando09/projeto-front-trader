import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      senha: ['']
    })
  }

  login(){
    const email = this.loginForm.get('email').value;
    const senha = this.loginForm.get('senha').value;

    this.auth.authenticate(email, senha).subscribe(
      () => this.router.navigateByUrl('/academia'),
      err => {
        console.log(err);
        this.loginForm.reset();
        alert('Login inválido')
      }
    )
  }
}
