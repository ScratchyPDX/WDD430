import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { ProductList } from './products/product-list/product-list';
import { ProductDetail } from './products/product-detail/product-detail';
import { AlertList } from './shared/alert-list/alert-list';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { CheckoutSuccess } from './checkout/checkout-success/checkout-success';
import { Checkout } from './checkout/checkout/checkout';
import { Cart } from './cart/cart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Home,
    ProductList,
    ProductDetail,
    AlertList,
    Footer,
    Header,
    CheckoutSuccess,
    Checkout,
    Cart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())

  ],
  bootstrap: [App]
})
export class AppModule { }
