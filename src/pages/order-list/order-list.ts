import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'OrderListPage'})
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
  orders:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('this.navParams.get orderList',this.navParams.get('orderList'));
    this.orders = this.navParams.get('orderList');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListPage');
  }

  //get order/orderId

}
