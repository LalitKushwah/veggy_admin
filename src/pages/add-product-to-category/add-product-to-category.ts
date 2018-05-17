import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CreateDataProvider} from "../../providers/create-data/create-data";
import {ProductModel} from "../../models/product.model";
import {CategoryModel} from "../../models/category.model";

@IonicPage()
@Component({
  selector: 'page-add-product-to-category',
  templateUrl: 'add-product-to-category.html',
})
export class AddProductToCategoryPage {

  category;
  product;
  categoryList = [];
  productList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public createData: CreateDataProvider) {
  }

  ionViewWillLoad() {
    this.createData.getAllProducts()
      .subscribe((data: ProductModel[]) => {
        this.productList = data;
    });

    this.createData.getAllCategories()
      .subscribe((data: CategoryModel[]) => {
      this.categoryList = data;
      });
  }


  addProductToCategory(product, category) {
    this.createData.addProductToCategory(product, category)
      .subscribe(data => {
        console.log('Added', data);
      })
  }

}
