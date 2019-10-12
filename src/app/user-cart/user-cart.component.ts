import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {ProductsServiceService} from '../services/products-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
items;
prodid;
item;
cart;
  constructor(
    private cartService: CartService,
    private productService: ProductsServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.prodid = params.prodid;
    // });
    // // this.items = this.cartService.getItems();
    // this.productService.getProducts().subscribe(data => {
    //   this.items = data;
    // });
    this.productService.showCart().subscribe(data => {
      this.cart = data;
    });

  }
  removeProductFromCart(pid: number) {
    this.productService.removeProductFromCart(pid).subscribe( (data) => {
  this.productService.showCart().subscribe((data1) => {
    this.cart = data1;
  });
});
  }

  decreaseQuantityFromCart(pid: number) {
    this.productService.removeProductFromCart(pid).subscribe( (data) => {
      this.productService.showCart().subscribe((data2) => {
        this.cart = data2;
      });
    });
  }

  addProductToCart(pid: number) {
    this.productService.removeProductFromCart(pid).subscribe( (data) => {
      this.productService.showCart().subscribe((data3) => {
        this.cart = data3;
      });
    });
  }
}
