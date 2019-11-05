import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService} from '../api-url.service';
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';

export interface UserDetails{
  id: number
  nome: string
  email: string
  password: string
  exp: number
}

interface TokenResponse{
  token: string
}

export interface TokenPayLoad{
  id: number
  nome: string
  email: string
  senha: string
  senhaConfirmacao: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token: string;

  constructor(
    private http: HttpClient,
    private url: ApiUrlService,
    private router: Router
  ) {}

  private saveToken (token: string): void{
    localStorage.setItem('userToken', token);
    this.token = token
  }

  private getToken (): string {
    if(!this.token) {
      this.token = localStorage.getItem('userToken')
    }
    return this.token
  }

  public getUser (): UserDetails {
    const token = this.getToken();
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public login (user: TokenPayLoad): Observable<any>{
    const base = this.http.post('/login', user)
    const request = base.pipe(
      map ((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  public estaLogado (): boolean{
    const user = this.getUser();
    if (user){
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register (user: TokenPayLoad): Observable<any>{
    const base = this.http.post(this.url.api_url()+'/client/register', user);
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }


  public logout (): void {
    this.token = ''
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/login')
  }

  authenticate(data: object) {
     return this.http.post(
      this.url.api_url() + '/login',
      data
    )
      .toPromise();
  }
}
