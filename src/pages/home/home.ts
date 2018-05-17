import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreateProductPage} from "../create-product/create-product";
import {CreateCategoryPage} from "../create-category/create-category";
import {AddProductToCategoryPage} from "../add-product-to-category/add-product-to-category";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToCreateProduct() {
    this.navCtrl.push(CreateProductPage);
  }

  navigateToCreateCategory() {
    this.navCtrl.push(CreateCategoryPage);
  }

  navigateToAddProductToCategory() {
    this.navCtrl.push(AddProductToCategoryPage);
  }

}
