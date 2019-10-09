import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  fname;
  lname;
name;
  pass;

  constructor(
    private service: AuthenticationService,
    private appService: AppService,
    private router: Router,
    private httpClient: HttpClient) {
  }

  url = 'http://localhost:8080/login/addUser';

  formValidate = true;

  ngOnInit() {
  }

  adduser() {
    console.log(this.name);
    const user = {
      username: this.name,
      password: this.pass
    };
    this.appService.addUser(user);
  }
}
  // submitData() {
  //   if (
  //     this.fname === undefined ||
  //     this.lname === undefined ||
  //     this.email === undefined ||
  //     this.password === undefined
  //   ) {
  //     this.formValidate = false;
  //   } else {
  //     this.formValidate = true;
  //   }
  //   if (this.formValidate) {
  //     const json = {
  //       fname: this.fname,
  //       lname: this.lname,
  //       email: this.email,
  //       password: this.password
  //     };
  //   }
  //   this.httpClient.post(this.url, json).subscribe(res => {
  //     console.log('Signup post successful!');
  //     this.router.navigate(['/login']);
  //   });
  // }
 /*
signedUp() {
  this.service.isUserLoggedIn();
  this.router.navigate(['home']);
}*/

