import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsServiceService} from '../services/products-service.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private items;


  constructor(private service: AppService , private http: ProductsServiceService , private router: Router) {
  }
  ngOnInit() {
    if (!this.service.checkLogin()) {
      this.router.navigate(['login']);
    }
    this.http.getProducts().subscribe(data => {
      this.items = data;
    });
  }
}
