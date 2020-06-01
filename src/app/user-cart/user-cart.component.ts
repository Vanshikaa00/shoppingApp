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
  total;
  constructor(
    private cartService: CartService,
    private productService: ProductsServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productService.showCart().subscribe(data => {
      this.cart = data;
      this.gettotal();
    });

  }
  removeProductFromCart(pid: number) {
    this.productService.removeProductFromCart(pid).subscribe( (data) => {
  this.productService.showCart().subscribe((data1) => {
    this.cart = data1;
    this.gettotal();
  });
});
  }

  decreaseQuantityFromCart(pid: number) {
    this.productService.decreaseQuantityFromCart(pid).subscribe( () => {
      this.productService.showCart().subscribe((data2) => {
        this.cart = data2;
        this.gettotal();
      });
    });
  }
  addProductToCart(pid: number) {
    this.productService.addProductToCartt(pid).subscribe( (data) => {
      this.productService.showCart().subscribe((data3) => {
        this.cart = data3;
        this.gettotal();

      });
    });
  }
checkoutTotal() {
    this.productService.getTotal().subscribe((data4) => {
      this.total = data4;
      console.log(this.total);
    });
    alert('Please proceed to checkout now!');
}
  goToCheckout() {
    this.productService.clearCart().subscribe((data5) => {
    });
    this.router.navigate(['/checkout']);
  }

gettotal() {
    this.total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.total += this.cart[i].products.price * this.cart[i].quantity;
    }
    console.log(this.total);
}
totalPrice() {
    this.productService.TotalPrice().subscribe((data6) => {
      this.total = data6;
      console.log(data6);
    });
}



}
