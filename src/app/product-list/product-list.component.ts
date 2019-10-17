import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {productItems} from './product.items';
import {ProductsServiceService} from '../services/products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   category;
   items;
  constructor(private router: Router, private service: ProductsServiceService ) { }
  // products = productItems;
  product;


  ngOnInit() {
    this.service.getProducts().subscribe((data) => {
      this.product = data;
    });
  }
  goToCart(prodid: number) {
    // this.router.navigate(['/cart']);
    this.service.addProductToCartt(prodid).subscribe((data) => {
    });
  }
  goToPriceRange($event, number1: number, number2: number) {
    this.service.getProductsByRange(number1, number2).subscribe((data) => {
      this.product = data;
    });
  }

/*
   goToProductCategory($event, category: string) {
    this.service.getProductsByCategory(category).subscribe((data) => {
      this.product = data;
    });
  }
*/

  showClothing() {
  this.category = 'Clothing';
  this.service.getProductsByCategory('Clothing').subscribe((data1) => {
    this.product = data1;
  });
}

  showGroceries() {
    this.category = 'Grocery';
    this.service.getProductsByCategory('Grocery').subscribe((data2) => {
      this.product = data2;
    });
  }
  showElectronics() {
    this.category = 'Electronics';
    this.service.getProductsByCategory('Electronics').subscribe((data3) => {
      this.product = data3;
    });
  }
  showFootwear() {
    this.category = 'footwear';
    this.service.getProductsByCategory('footwear').subscribe((data4) => {
      this.product = data4;
    });
  }
}
