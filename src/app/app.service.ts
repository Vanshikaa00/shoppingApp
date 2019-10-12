import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  isLoggedIn(value: boolean) {
    sessionStorage.setItem('auth', String(value));
    return value;
  }

  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
/*    if (auth) {
      return true;
    } else {
      return false;
    }*/
  }

  checkLogout() {
    sessionStorage.removeItem('username');
  }
  addUser(user) {
    return this.httpClient.post('http://localhost:8080/login/addUser' , user).subscribe(res => {
      this.router.navigate(['login']);
    });
  }
}
