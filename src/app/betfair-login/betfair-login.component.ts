import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Component({
  selector: 'app-betfair-login',
  templateUrl: './betfair-login.component.html',
  styleUrls: ['./betfair-login.component.css']
})
export class BetfairLoginComponent implements OnInit {
  // let betfair = require('betfair')
  constructor(
    // private Headers: HttpHeaders,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  loginBet(data){
    // console.log(data.form.value.username)
    let headers: HttpHeaders = new HttpHeaders();
// console.log(data.form.value)
    headers.append('Accept', 'application/json');
    headers.append('X-Application', 'BOW5JF3VnYo4rqkt');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    this.http.post('http://identitysso.betfair.com/api/login', data.form.value, {
      headers: headers,
    })
      .subscribe(response => {
        console.log(response)
      })
    // alert(data.form.value)
  }

}
