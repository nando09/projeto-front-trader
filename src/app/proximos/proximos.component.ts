import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../core/api-url.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-proximos',
  templateUrl: './proximos.component.html',
  styleUrls: ['./proximos.component.css']
})
export class ProximosComponent implements OnInit {
  user: any = JSON.parse(window.sessionStorage.getItem('user'))
  tomorrowGames: any = []
  nextGames: any = []

  constructor(
    private http: HttpClient,
    private url: ApiUrlService) { }

  ngOnInit() {
    this.getTmGames()
    this.getNextGames()
  }

  getTmGames() {
    this.http.get(this.url.api_url() + '/betfair/tmOdds', {
      headers: {
        Authorization: 'Bearer ' + this.user.token
      }
    }).subscribe(response => {
      let res: any = response
      if (res.message == "success") {
        this.tomorrowGames = res.data
      } else {
        alert("erro")
      }
    })
  }

  getNextGames() {
    this.http.get(this.url.api_url() + '/betfair/nextOdds', {
      headers: {
        Authorization: 'Bearer ' + this.user.token
      }
    }).subscribe(response => {
      let res: any = response
      if (res.message == "success") {
        this.nextGames = res.data
      } else {
        alert("erro")
      }
    })
  }
}
