import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../services/authentication.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor( private loginService: AppService, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.loginService.isLoggedIn(false);
    this.router.navigate(['login']);
  }


}
