import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProductToCategoryPage } from './add-product-to-category';

@NgModule({
  declarations: [
    AddProductToCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProductToCategoryPage),
  ],
})
export class AddProductToCategoryPageModule {}
