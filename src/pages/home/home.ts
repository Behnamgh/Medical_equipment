import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
devices:any = [];
  constructor(public navCtrl: NavController) {
this.devices = [{
brand: 'PHILIPS',
  imgUrl: '../assets/imgs/Philips1.jpg',
  comment: 12,
  like: 6,
  desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy.'
},{
brand: 'SIEMENS',
  imgUrl: '../assets/imgs/siemens.png',
  comment: 132,
  like: 7,
  desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy.'
},{
brand: 'GE',
  imgUrl: '../assets/imgs/ge1.jpg',
  comment: 312,
  like: 62,
  desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy.'
}]
  }

}
