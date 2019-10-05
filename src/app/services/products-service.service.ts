import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor( private httpClient: HttpClient) { }


  getProducts() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/home/getProduct', {headers});
  }
  getProductsById() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/home/getProductById/', {headers});
  }
  getProductsByRange(price1, price2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/home/getProductByRange/' + price1 + '/between/' + price2, {headers});
  }
  getProductsByCategory(category) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8080/home/getProductByCategory/' + category, {headers});
  }
}
