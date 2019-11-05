import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayLoad } from "../core/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  credentials: TokenPayLoad = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    senhaConfirmacao:''
  }

  constructor(private auth: AuthService, private router: Router) { }

  register () {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/login')
      },
      err => {
        console.error(err)
      }
    )
  }

  ngOnInit() {
  }

}
