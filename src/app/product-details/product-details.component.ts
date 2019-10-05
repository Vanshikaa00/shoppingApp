import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsServiceService} from '../services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
userId;
products;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsServiceService
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params.id;
    });
    this.productsService.getProducts().subscribe( (data) => {
     this.products = data;
   });
  }
}
