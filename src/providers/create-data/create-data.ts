import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {CategoryModel} from "../../models/category.model";

@Injectable()
export class CreateDataProvider {
  public baseUrl = 'http://54.213.245.57:3007';
  public productsEndpoint = '/product';
  public categoryEndpoint = '/category';
  public productCategoryEndpoint = '/productCategory';
  public addProductToCategoryEndpoint = '/addProductToCategory';
  public createProductEndpoint = '/createProduct';
  public createCategoryEndpoint = '/createCategory';


  constructor(public http: HttpClient) {
  }


  createProduct(data: ProductModel) {
    return this.http.post(this.baseUrl + this.productsEndpoint + this.createProductEndpoint, data);
  }

  createCategory(data: CategoryModel) {
    return this.http.post(this.baseUrl + this.categoryEndpoint + this.createCategoryEndpoint, data);
  }

  getAllProducts() {
    return this.http.get(this.baseUrl + this.productsEndpoint);
  }

  getAllCategories() {
    return this.http.get(this.baseUrl + this.categoryEndpoint);
  }

  addProductToCategory(productId, categoryId) {
    return this.http.post(this.baseUrl + this.productCategoryEndpoint + this.addProductToCategoryEndpoint, {productId: productId, categoryId: categoryId});
  }

}
