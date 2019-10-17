import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../services/products-service.service';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-product-addition',
  templateUrl: './product-addition.component.html',
  styleUrls: ['./product-addition.component.scss']
})
export class ProductAdditionComponent implements OnInit {
  product1;
  productname;
   productcategory;
  productimage;
   price;
   productquantity;
  productId;

  constructor(
    private productsService: ProductsServiceService,
    private router: Router,
    private service: AppService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.product1 = data;
    });
  }

  get() {
    this.router.navigate(['/home']);
  }
  addproduct() {
    const json = {
      productName: this.productname ,
      productCategory: this.productcategory,
     productImage: this.productimage ,
      productQuantity: this.productquantity,
      price: this.price ,
      active: 1
    };
    console.log(json);
    this.productsService.addProductToCart(json).subscribe((data1) => {
    });
  }

  update1(value: any) {
    this.productname = value;
    console.log(this.productname);
  }

  update2(value: any) {
    this.price = value;
  }

  update3(value: any) {
    this.productcategory = value;
  }

  update4(value: any) {
    this.productquantity = value;
  }

  update5(value: any) {
    this.productimage = value;
  }

  update6(value: any) {
    this.productId = value;
  }
  edit() {
this.productsService.editProduct(this.productId, {
  productId: this.productId,
  productName: this.productname ,
  productCategory: this.productcategory,
  productImage: this.productimage ,
  productQuantity: this.productquantity,
  price: this.price ,
  active: 1
}).subscribe( (data) => {
  localStorage.removeItem('edit');
  this.router.navigate(['/product-details'], {
    queryParams: {
      product_id: this.productId
    }
  });
});
  }

}
