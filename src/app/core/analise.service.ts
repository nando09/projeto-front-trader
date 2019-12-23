import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnaliseService {
  jogo: any

  constructor() { }

  escolherJogo(jogo: any) {
    this.jogo = jogo
  }

  apagarJogo() {
    this.jogo = null
  }

  getJogo() {
    return this.jogo
  }
}
