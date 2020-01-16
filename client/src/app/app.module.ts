// import { AngularFireModule } from 'angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFireModule } from 'angular/fire'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerachBarComponent } from './serach-bar/serach-bar.component';
import { from } from 'rxjs';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SerachBarComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initalizeApp(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
