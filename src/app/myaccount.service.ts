import { Injectable } from '@angular/core';
import {ProductsServiceService} from './services/products-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyaccountService {

  constructor(private productsService: ProductsServiceService,
              private http: HttpClient) { }
getProfile() {
  const token = sessionStorage.getItem('token');
  const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
  const url = 'http://localhost:8080/profile/getUserData' ;
  return this.http.get(url, {headers});

}
}
