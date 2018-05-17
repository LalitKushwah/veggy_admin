import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductModel} from "../../models/product.model";
import {CreateDataProvider} from "../../providers/create-data/create-data";

@IonicPage()
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html',
})
export class CreateProductPage {
  product = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: CreateDataProvider) {
  }

  createProduct(product) {
      this.dataProvider.createProduct(product)
        .subscribe(data =>
        {
          console.log('===========ProductCreatioSuccessful=========', data);
        }, err => {
          console.log('===========Error=========', err);
        })
  }

}
