import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlService } from '../core/api-url.service';
@Component({
  selector: 'app-dashboard-ct',
  templateUrl: './dashboard-ct.component.html',
  styleUrls: ['./dashboard-ct.component.css']
})
export class DashboardCTComponent implements OnInit {
  betfair: any = JSON.parse(window.sessionStorage.getItem('betfair'))
  user: any = JSON.parse(window.sessionStorage.getItem('user'))
  livegames: any = []
  nextgames: any = []
  timeLoop: any
  constructor(
    private http: HttpClient,
    private url: ApiUrlService
  ) { }

  async ngOnInit() {
    this.getLiveEvents()
    this.getNextEvents()
    // this.timeLoop = setInterval(() => {
    //   this.getLiveEvents()
    //   this.getNextEvents()
    // }, 30000)
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.timeLoop) {
      clearInterval(this.timeLoop)
    }
  }
  getLiveEvents() {
    let data = {
      token: this.betfair.token
    }
    this.http.post(this.url.api_url() + '/betfair/liveEvents', data, {
      headers: {
        Authorization: 'Bearer ' + this.user.token
      }
    }).subscribe(response => {
      // console.log(response)
      this.livegames = response
    })

  }
  getNextEvents() {
    let data = {
      token: this.betfair.token
    }
    this.http.post(this.url.api_url() + '/betfair/nextEvents', data, {
      headers: {
        Authorization: 'Bearer ' + this.user.token
      }
    }).subscribe(response => {
      this.nextgames = response
    })
  }
}
