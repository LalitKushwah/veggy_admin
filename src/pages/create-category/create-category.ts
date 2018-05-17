import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CreateDataProvider} from "../../providers/create-data/create-data";

/**
 * Generated class for the CreateCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-category',
  templateUrl: 'create-category.html',
})
export class CreateCategoryPage {
category = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: CreateDataProvider) {
  }


  createCategory(category) {
    this.dataProvider.createCategory(category)
      .subscribe(data =>
      {
        console.log('===========CategoryCreatioSuccessful=========', data);
      }, err => {
        console.log('===========Error=========', err);
      })
  }

}
