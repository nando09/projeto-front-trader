import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../core/api-url.service';
import { RequestsService } from '../core/requests.service';
import { AnaliseService } from '../core/analise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proximos',
  templateUrl: './proximos.component.html',
  styleUrls: ['./proximos.component.css']
})
export class ProximosComponent implements OnInit {
  tomorrowGames: any
  filteredTomorrow: any
  filteredNext: any
  nextGames: any

  constructor(
    private router: Router,
    private requests: RequestsService,
    private analise: AnaliseService
  ) { }

  ngOnInit() {
    this.getTmGames()
    this.getNextGames()
  }

  getTmGames() {
    this.requests.getTomorrowGames().subscribe(response => {
      let res: any = response
      if (res[0] && res[0].event) {
        this.tomorrowGames = res
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
      } else {
        alert('Erro!')
      }

    })
  }

  analisar(jogo: any) {
    this.analise.escolherJogo(jogo)
    this.router.navigateByUrl('/bdc-aovivo/' + jogo.event.id);
    // let game = this.analise.getJogo()
    // console.log(game)
  }
}
