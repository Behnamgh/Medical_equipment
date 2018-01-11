import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DevicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DevicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DevicesProvider Provider');
  }
  getDevices(){
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post('list', { headers: headers });
        
  }

}
