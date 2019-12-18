import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../core/api-url.service';
import { RequestsService } from '../core/requests.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-proximos',
  templateUrl: './proximos.component.html',
  styleUrls: ['./proximos.component.css']
})
export class ProximosComponent implements OnInit {
  user: any = JSON.parse(window.sessionStorage.getItem('user'))
  tomorrowGames: any
  filteredTomorrow: any
  filteredNext: any
  nextGames: any

  constructor(
    private http: HttpClient,
    private url: ApiUrlService,
    private requests: RequestsService
  ) { }

  ngOnInit() {
    if (!JSON.parse(sessionStorage.getItem('tmGames'))) {
      this.getTmGames()
    } else {
      this.tomorrowGames = JSON.parse(sessionStorage.getItem('tmGames'))
    }
    if (!JSON.parse(sessionStorage.getItem('nextGames'))) {
      this.getNextGames()
    } else {
      this.nextGames = JSON.parse(sessionStorage.getItem('nextGames'))
    }
    if (this.tomorrowGames && this.nextGames) {
      this.filter('Match Odds')
    }
  }

  filter(type: any) {
    let games = this.tomorrowGames
    for (let game in games) {
      let filtered = games[game].market.filter(function (market) { return market.marketName === type })
      games[game].market = filtered
    }
    this.filteredTomorrow = games
    this.tomorrowGames = JSON.parse(sessionStorage.getItem('tmGames'))
    console.log(games)
    let nextGames = this.nextGames
    for (let game in nextGames) {
      let filtered = nextGames[game].market.filter(function (market) { return market.marketName === type })
      nextGames[game].market = filtered
    }
    this.filteredNext = nextGames
    this.nextGames = JSON.parse(sessionStorage.getItem('nextGames'))
    console.log(nextGames)
  }

  getTmGames() {
    this.requests.getTomorrowGames().subscribe(response => {
      let res: any = response
      if (res[0] && res[0].event) {
        this.tomorrowGames = res
        sessionStorage.setItem('tmGames', JSON.stringify(res))
      } else {
        alert('Erro!')
      }
      console.log(response)
    })
  }

  getNextGames() {
    this.requests.getNextGames().subscribe(response => {
      let res: any = response
      if (res[0] && res[0].event) {
        this.nextGames = res
        sessionStorage.setItem('nextGames', JSON.stringify(res))
      } else {
        alert('Erro!')
      }

    })
  }
}
