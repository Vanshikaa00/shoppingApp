import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  username;

  constructor(private router: Router,
              private service: AppService,
              private authService: AuthenticationService) { }
  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['login']);
    }
  }

  loginAgain() {
    this.service.isLoggedIn(false);
  }
}
