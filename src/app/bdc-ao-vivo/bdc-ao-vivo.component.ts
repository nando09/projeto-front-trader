import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestsService } from '../core/requests.service';
import { AnaliseService } from '../core/analise.service';

@Component({
  selector: 'app-bdc-ao-vivo',
  templateUrl: './bdc-ao-vivo.component.html',
  styleUrls: ['./bdc-ao-vivo.component.css']
})
export class BdcAoVivoComponent implements OnInit {
  jogo: any
  constructor(
    private analise: AnaliseService,
    private requests: RequestsService,
  ) { }

  ngOnInit() {
    this.jogo = this.analise.getJogo()
    if (this.jogo) {
      this.analise.escolherJogo(this.jogo)
    }
    this.requests.analisar(this.jogo).subscribe(response => {
      console.log(response)
    })
  }

  ngOnDestroy(): void {
  }

}
