import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../services/products-service.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {
cart;
  constructor(private productsService: ProductsServiceService) { }

  ngOnInit() {
    return this.productsService.getOrders().subscribe( (data) => {
      this.cart = data;
    });
  }

}
