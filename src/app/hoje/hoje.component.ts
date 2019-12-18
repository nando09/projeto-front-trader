import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../core/requests.service';

@Component({
  selector: 'app-hoje',
  templateUrl: './hoje.component.html',
  styleUrls: ['./hoje.component.css']
})
export class HojeComponent implements OnInit {
  liveGames: any
  nextGames: any
  filteredLive: any
  filteredNext: any
  constructor(
    private requests: RequestsService
  ) { }

  ngOnInit() {
    this.getLiveGames()
    if (!JSON.parse(sessionStorage.getItem('nextTodayOdds'))) {
      this.getNextGames()
    } else {
      this.nextGames = JSON.parse(sessionStorage.getItem('nextTodayOdds'))
    }
  }

  filter(type: any) {
    let games = this.liveGames
    for (let game in games) {
      let filtered = games[game].market.filter(function (market) { return market.marketName === type })
      games[game].market = filtered
    }
    this.filteredLive = games
    this.liveGames = JSON.parse(sessionStorage.getItem('todayLiveOdds'))
    console.log(games)
    let nextGames = this.nextGames
    for (let game in nextGames) {
      let filtered = nextGames[game].market.filter(function (market) { return market.marketName === type })
      nextGames[game].market = filtered
    }
    this.filteredNext = nextGames
    this.nextGames = JSON.parse(sessionStorage.getItem('nextTodayOdds'))
    console.log(nextGames)
  }

  getLiveGames() {
    this.requests.getLiveOdds().subscribe(response => {
      let res: any = response
      if (res[0] && res[0].event) {
        this.liveGames = res
        sessionStorage.setItem('todayLiveOdds', JSON.stringify(res))
        this.filter('Match Odds')
      } else {
        alert('Erro!')
      }
      console.log(response)
    })
  }

  getNextGames() {
    this.requests.getNextOdds().subscribe(response => {
      let res: any = response
      if (res[0] && res[0].event) {
        this.nextGames = res
        sessionStorage.setItem('nextTodayOdds', JSON.stringify(res))
      } else {
        alert('Erro!')
      }
      console.log(response)
    })
  }

}
