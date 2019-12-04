import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../core/api-url.service';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {
  user: any = JSON.parse(window.sessionStorage.getItem('user'))
  games: any = []
  constructor(
    private http: HttpClient,
    private url: ApiUrlService) { }

  ngOnInit() {
    this.getGames()
  }
  getGames() {
    this.http.get(this.url.api_url() + '/betfair/todayOdds', {
      headers: {
        Authorization: 'Bearer ' + this.user.token
      }
    }).subscribe(response => {
      let res: any = response
      if (res.message == "success") {
        for (let game of res.data) {

        }
        this.games = res.data
      } else {
        alert("erro")
      }
    })
  }
}
