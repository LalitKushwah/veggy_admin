import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateDataProvider } from '../providers/create-data/create-data';
import {CreateProductPage} from "../pages/create-product/create-product";
import {CreateCategoryPage} from "../pages/create-category/create-category";
import {CreateProductPageModule} from "../pages/create-product/create-product.module";
import {CreateCategoryPageModule} from "../pages/create-category/create-category.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AddProductToCategoryPage} from "../pages/add-product-to-category/add-product-to-category";
import {AddProductToCategoryPageModule} from "../pages/add-product-to-category/add-product-to-category.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    CreateProductPageModule,
    CreateCategoryPageModule,
    AddProductToCategoryPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateProductPage,
    CreateCategoryPage,
    AddProductToCategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CreateDataProvider
  ]
})
export class AppModule {}
