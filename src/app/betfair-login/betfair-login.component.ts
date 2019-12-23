import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../core/api-url.service';

@Component({
  selector: 'app-betfair-login',
  templateUrl: './betfair-login.component.html',
  styleUrls: ['./betfair-login.component.css']
})
export class BetfairLoginComponent implements OnInit {
  // let betfair = require('betfair')
  response: any = []
  user: any = JSON.parse(window.sessionStorage.getItem('user'))
  betfair: any = JSON.parse(window.sessionStorage.getItem('betfair'))
  betfairAccount: any = JSON.parse(window.localStorage.getItem('betfair'))
  constructor(
    // private Headers: HttpHeaders,
    private http: HttpClient,
    private url: ApiUrlService
  ) {
    this.localCheck()

  }

  ngOnInit() {

  }

  localCheck() {
    let data: any = {
      form: {
        value: {}
      }
    };
    data.form.value = this.betfairAccount
    if (data.form.value && !this.betfair) {
      this.loginBet(data)
    } else if (data.form.value && this.betfair && this.betfair.expires < new Date()) {
      this.loginBet(data)
    } else if (!data.form.value && !this.betfair) {
      alert('Acesse sua conta da betfair para acessar as informações!')
    }
  }

  loginBet(data: any) {
    this.response = []
    // console.log(data.form.value.username)
    this.http.post(this.url.api_url() + '/betfair/login', data.form.value, {
      headers: {
        Authorization: 'Bearer ' + this.user.token
      }
    }).subscribe(response => {
      this.response = response
      console.log(response)
      if (this.response.status == 'FAIL') {
        alert('Login Incorreto!')
      } else {
        if (data.form.value.remember) {
          window.localStorage.setItem('betfair', JSON.stringify(data.form.value))
        }
        let expires = new Date()
        expires.setDate(expires.getDate() + 1)
        expires.setHours(6)
        expires.setMinutes(0)
        this.response.expires = expires
        window.sessionStorage.setItem('betfair', JSON.stringify(this.response))
        this.betfair = JSON.parse(window.sessionStorage.getItem('betfair'))
      }
    })
    // let headers: HttpHeaders = new HttpHeaders();
    // // console.log(data.form.value)
    // headers.append('Accept', 'application/json');
    // headers.append('X-Application', 'BOW5JF3VnYo4rqkt');
    // headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');

    // this.http.post('http://identitysso.betfair.com/api/login', data.form.value, {
    //   headers: headers,
    // })
    //   .subscribe(response => {
    //     console.log(response)
    //   })
    // alert(data.form.value)
  }

}
