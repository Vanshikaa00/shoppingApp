import { Component, OnInit } from '@angular/core';
import {productItems} from '../product-list/product.items';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor() { }
  products = productItems;
  ngOnInit() {
  }

}
