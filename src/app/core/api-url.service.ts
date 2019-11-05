import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor() { }

  api_url(){
    return 'http://127.0.0.1:8000/api';
  }
}
