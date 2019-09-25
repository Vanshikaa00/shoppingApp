import { Routes} from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { UserCartComponent} from './user-cart/user-cart.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
{
  path : 'home',
  component: HomePageComponent,
},
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: UserCartComponent,
  },
  {
    path: '**',
    redirectTo: 'signup',
  },
];
