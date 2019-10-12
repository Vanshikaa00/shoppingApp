import { Injectable } from '@angular/core';
import { ProductsServiceService} from './services/products-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];
  constructor( private http: ProductsServiceService) {
  }
  // addToCart(product) {
  //   this.items.push(product);
  // }

  // getItems() {
  //   return this.items;
  // }
  //
  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
}
