import { Injectable } from '@angular/core';
import { ApiUrlService } from './api-url.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  user: any = JSON.parse(window.sessionStorage.getItem('user'))
  betFair: any = JSON.parse(window.sessionStorage.getItem('betfair'))
  options: any = {
    headers: {
      Authorization: 'Bearer ' + this.user.token
    }
  }
  constructor(
    private url: ApiUrlService,
    private http: HttpClient,
  ) { }

  getTodayGames() {
    return this.http.post(this.url.api_url() + '/betfair/todayOdds', { token: this.betFair.token }, this.options)
  }
  getTomorrowGames() {
    return this.http.post(this.url.api_url() + '/betfair/tmOdds', { token: this.betFair.token }, this.options)
  }
  getNextGames() {
    return this.http.post(this.url.api_url() + '/betfair/nextOdds', { token: this.betFair.token }, this.options)
  }


}
