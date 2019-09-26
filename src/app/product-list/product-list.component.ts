import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {productItems} from './product.items';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

/*  constructor(private router: Router) { }*/
  constructor() { }
  products = productItems;

  ngOnInit() {
  }
/*goToDetails(id) {
  this.router.navigate(['/product-details'], {queryParams: {id: 1}});
}*/
}
