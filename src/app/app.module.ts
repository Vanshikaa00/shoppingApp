import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ProductAdditionComponent } from './product-addition/product-addition.component';
import {HttpClientModule} from '@angular/common/http';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UserCartComponent,
    SignUpComponent,
    LoginComponent,
    MyAccountComponent,
    ProductAdditionComponent,
    LogoutComponent,
    CheckoutComponent,
    OrderhistoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
