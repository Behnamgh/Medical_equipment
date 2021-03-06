import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrandsPage } from '../brands/brands';
import { DevicesProvider } from '../../providers/devices/devices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  devices: any = [];
  public pushPage: BrandsPage;

  constructor(public navCtrl: NavController, public deviceProvider: DevicesProvider) {
    this.devices = [{
      brand: 'PHILIPS',
      imgUrl: '../assets/imgs/Philips1.jpg',
      comment: 12,
      like: 6,
      description: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy.'
    }, {
      brand: 'SIEMENS',
      imgUrl: '../assets/imgs/siemens1.png',
      comment: 132,
      like: 7,
      description: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy.'
    }, {
      brand: 'GE',
      imgUrl: '../assets/imgs/ge1.jpg',
      comment: 312,
      like: 62,
      description: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy.'
    }];
  }
ionViewDidLoad(){
  this.deviceProvider.getDevices().subscribe(result => console.log(result));
}
  openP(event, det) {
    this.navCtrl.push(BrandsPage, {
      behnam: det
    })
  }
}

