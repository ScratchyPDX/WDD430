import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductList } from './products/product-list/product-list';
import { CheckoutSuccess } from './checkout/checkout-success/checkout-success';
import { Checkout } from './checkout/checkout/checkout';
import { Cart } from './cart/cart';
import { ProductDetail } from './products/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products/:category', component: ProductList },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'checkout/success', component: CheckoutSuccess },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
