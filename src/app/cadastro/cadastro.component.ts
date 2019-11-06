import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../core/user/register.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  data = {};
  nameError: string = '';
  emailError: string = '';
  passwordError: string = '';

  constructor(
    private registerService: RegisterService,
    private router: Router,
    ) { }


  ngOnInit(){
  }

  register(data){
    // console.log(data.form.value)
    this.nameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.registerService.register(data.form.value)
      .then(response => {
        this.data = response;
        console.log(data)
        if(data.status== false){
          alert('Erro, tente novamente!');
          console.log(response);
          this.nameError = data.name;
          this.emailError = data.email;
          this.passwordError = data.password;
        } else {
          alert('Cadastrado com sucesso!');
          this.router.navigateByUrl('/login');
        }
      })
  }


}
