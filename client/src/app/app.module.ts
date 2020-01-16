import { RouterModule } from '@angular/router';
// import { AngularFireModule } from 'angular/fire';
import {
  BrowserModule
}
  from '@angular/platform-browser';
import {
  NgModule
}
  from '@angular/core';
// import { AngularFireModule } from 'angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { ShopOwnerdashboardComponent } from './shop-owner/shop-ownerdashboard/shop-ownerdashboard.component';
import { SectionViewComponent } from './shop-owner/section-view/section-view.component';
import { SectionCardComponent } from './shop-owner/section-card/section-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    LoginComponent,
    ShopOwnerdashboardComponent,
    SectionViewComponent,
    SectionCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'shopOwner/dashboard', component: ShopOwnerdashboardComponent }
    ])
    // AngularFireModule.initalizeApp(),
    // AppRoutingModule
  ],
  providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
