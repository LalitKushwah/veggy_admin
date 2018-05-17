import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  orders:any=[];

  constructor(public navCtrl: NavController,private httpClient:HttpClient) {
      this.orders = [
        {
          statusId:'ORDER_CREATED',
          status:'Created',
          orderItemCount:100
        },
        {
          statusId:'ORDER_READY',
          status:'Ready',
          orderItemCount:100
        },
        {
          statusId:'ORDER_APPROVED',
          status:'Approved',
          orderItemCount:100
        },
        {
          statusId:'ORDER_COMPLETED',
          status:'Completed',
          orderItemCount:100
        },
        {
          statusId:'ORDER_CANCELLED',
          status:'Cancelled',
          orderItemCount:100
        }
      ];
      this.getOrders();
  }

  getOrders() {
    // this.httpClient.get();
    this.httpClient.get('http://54.213.245.57:3007/order/orderStatus', {}).subscribe(data => {
      this.orders = data;
    });
  }
    getOrdersByStatus(order) {
      this.httpClient.post('http://54.213.245.57:3007/order', {statusId:order.statusId}).subscribe(data => {
        let orderList = data;
        this.navCtrl.push('OrderListPage',{orderList:orderList});

      });
    }

    /*let orderList = [
      {
      orderId:'VGD1001',
      items:[
        {
        name:'White Sauce Pasta',
        id: 1
        },
        {
          name:'Red Sauce Pasta',
          id: 2
        }
       ]
      },
      {
        orderId:'VGD1002',
        items:[
          {
            name:'Fries',
            id: 5
          },
          {
            name:'Dal Pakwan',
            id: 6
          }
        ]
      },
      {
        orderId:'VGD1003',
        items:[
          {
            name:'Fries',
            id: 5
          },
          {
            name:'Dal Pakwan',
            id: 6
          }
        ]
      },
      {
        orderId:'VGD1004',
        items:[
          {
            name:'Fries',
            id: 5
          },
          {
            name:'Dal Pakwan',
            id: 6
          }
        ]
      }
    ];
    this.navCtrl.push('OrderListPage',{orderList:orderList});

*/
}
