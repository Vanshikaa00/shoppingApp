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

  constructor( private router: Router,
               private service: AppService,
               private authService: AuthenticationService) { }

  ngOnInit() {
   if (!this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }
 logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['logout']);
  }


}
