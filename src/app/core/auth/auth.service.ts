import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService} from '../api-url.service';
import { Router } from '@angular/router';

const API_URL = 'http://localhost:4200';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private url: ApiUrlService,
    private router: Router
  ) {}

  authenticate(data){
    return this.http
      .post(this.url.api_url() + '/login',
        data
      )
      .toPromise();
  }
}
