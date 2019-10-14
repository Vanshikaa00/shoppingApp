import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsServiceService} from '../services/products-service.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
userId;
products;
  product;
 List;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private productsService: ProductsServiceService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.id;
      // this.List = this.allDetailss(this.userId);
      console.log(this.userId);
    });
    this.productsService.getProducts().subscribe( (data) => {
     this.products = data;
   });
  }

  goToCart(prodid: number) {
    // this.router.navigate(['/cart']);
    this.productsService.addProductToCart(prodid).subscribe((data) => {
    });
  }
  //
  //
  // allDetailss(id) {
  //   for ( let i = 0; i < this.products.length; i++)
  //   {
  //     if ( this.products[i].productId == id) {
  //       return this.products[i].productId;
  //     }
  //   }
  // }


  addToCart(id) {
    window.alert('Your product has been added to the cart!');
     // this.cartService.addToCart(id);
  }
}
