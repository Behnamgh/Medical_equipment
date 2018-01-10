import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrandDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brand-detail',
  templateUrl: 'brand-detail.html',
})
export class BrandDetailPage {
  device: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.device = navParams.get('device');

  }

  ionViewDidLoad() {
    this.device = this.navParams.get('device');
  }

}
