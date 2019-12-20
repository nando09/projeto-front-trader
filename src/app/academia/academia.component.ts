import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../core/requests.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-academia',
  templateUrl: './academia.component.html',
  styleUrls: ['./academia.component.css']
})
export class AcademiaComponent implements OnInit {
  aula: any
  module: any
  comment: any = ''
  constructor(
    private route: ActivatedRoute,
    private requests: RequestsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getAula()
    this.getModule()
  }

  getModule() {
    this.route.params.subscribe(params => {
      let id = +params['moduloId']
      this.requests.getAulasModulo(id).subscribe(response => {
        let res: any = response
        if (res.id) {
          this.module = res
        }
      })
    })
  }

  getAula() {
    this.route.params.subscribe(params => {
      let id = +params['aulaId']
      this.requests.getModuloAula(id).subscribe(response => {
        let res: any = response
        if (res.id) {
          this.aula = res
          this.aula.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.aula.video)
          console.log(this.aula)
        }
      })
    })
  }

  comentar(comentario: any) {
    this.route.params.subscribe(params => {
      let data = {
        'lesson_id': +params['aulaId'],
        'content': comentario
      }
      this.requests.comentar(data).subscribe(response => {
        let res: any = response
        if (res.id) {
          this.aula.comments = res.comments
        } else {
          alert('Erro!')
        }
      })
    })
  }
}
