import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService} from '../api-url.service';
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import {TokenService} from "../token/token.service";

const API_URL = 'http://localhost:4200';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private url: ApiUrlService,
    private router: Router
  ) {}

  authenticate(nome: string, senha: string){
    return this.http
      .post(API_URL + '/login',
        {email: nome, password: senha},
        {observe: 'response'}
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.tokenService.setToken(authToken);
        console.log(`User ${nome} authenticated with token ${authToken}`);
      }))
  }
}
