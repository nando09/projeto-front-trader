import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      email: [''],

      nome: [''],

      senha: [''],

      senhaConfirmacao: ['']
    })
  }



}
