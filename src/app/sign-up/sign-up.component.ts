import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import { HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  fname;
  lname;
  model: any = {};
  name;
  pass;
phno;
  constructor(
    private service: AuthenticationService,
    private appService: AppService,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient) {
  }

  url = 'http://localhost:8080/login/addUser';

  formValidate = true;
  myp;
  person;

  ngOnInit() {

  }

  adduser() {
    console.log(this.name);
    const user = {
      fname: this.fname,
      lname: this.lname,
      phno: this.phno,
      username: this.name,
      password: this.pass
    };
    this.appService.addUser(user);
    alert('Hello ' + this.fname + this.lname + ' your account has been created. You can login now!');
  }

}
 /*
signedUp() {
  this.service.isUserLoggedIn();
  this.router.navigate(['home']);
}*/

