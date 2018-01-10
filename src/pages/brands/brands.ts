import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
})
export class BrandsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
public behnam: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('behnam'));
    this.behnam = this.navParams.get('behnam');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandsPage');
  }

}
