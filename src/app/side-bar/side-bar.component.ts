import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RequestsService } from '../core/requests.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  curso: any = JSON.parse(sessionStorage.getItem('curso'))
  constructor(
    private requests: RequestsService
  ) {
    if (!JSON.parse(sessionStorage.getItem('curso'))) {

      this.getCurso()
    }
  }

  ngOnInit() {
  }
  toggleMenu(id, id2) {
    $(id + 'Menu').toggleClass('d-none');
    $(id2 + 'Menu').addClass('d-none');
  }
  togglePartidasAoVivo(id) { $(id).toggleClass('d-none'); }
  togglePpartidasEncerradas(id) { $(id).toggleClass('d-none'); }
  togglePproximasPartidas(id) { $(id).toggleClass('d-none'); }

  getCurso() {
    this.requests.getCourse().subscribe(response => {
      let res: any = response
      if (res.id) {
        this.curso = res
        sessionStorage.setItem('curso', JSON.stringify(res))
      } else {
        alert('erro!')
      }
    })
  }
}
