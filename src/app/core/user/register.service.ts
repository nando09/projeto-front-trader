import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService} from "../api-url.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private url: ApiUrlService,
  ) {}

  register(data) {
    return this.http.post(
      this.url.api_url() + '/client/register',
      data
    )
      .toPromise()
  }
}
