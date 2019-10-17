import { Component, OnInit } from '@angular/core';
import {MyaccountService} from '../myaccount.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
myp;
  constructor(private abc: MyaccountService, private router: Router, private http: HttpClient) { }
disabled = true;
  url = 'http://localhost:8080/profile/updateUserData';

  ngOnInit() {
    this.abc.getProfile().subscribe((data) => {
      this.myp = data;
    });
  }
edit() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic' + token});
    return this.http.put(this.url, this.myp, {headers}).subscribe(data => {
      console.log(data);
      this.router.navigate(['/my-account']);
    });
}
  toggle() {
    this.disabled = false;
  }


  editprofile() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    alert('Profile updated!');
    return this.http.put(this.url, this.myp, {headers}).subscribe(data => {
      console.log(data);
      this.router.navigate(['/my-account']);
    });
  }
}
