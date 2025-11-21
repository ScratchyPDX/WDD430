import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ExternalServicesService } from '../../services/external-services.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart-item.model';
import { CheckoutData } from '../../models/checkout-data.model';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  checkoutForm!: FormGroup;
  itemTotal = 0;
  shipping = 0;
  tax = 0;
  orderTotal = 0;
  submitting = false;
  cartItems: CartItem[] = [];

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private externalServices: ExternalServicesService,
    private alertService: AlertService,
    private router: Router
  ) {
      this.cartItems = this.cartService.getCartItems();
  }

  ngOnInit(): void {
    if (this.cartItems.length === 0) {
      this.router.navigate(['/cart']);
      return;
    }

    this.checkoutForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiration: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      code: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });

    this.calculateTotals();
  }

  calculateTotals(): void {
    this.itemTotal = this.cartService.getCartTotal();
    const itemCount = this.cartItems.reduce((sum, item) => sum + item.Quantity, 0);
    this.shipping = 10 + (itemCount - 1) * 2;
    this.tax = (this.itemTotal * 0.06);
    this.orderTotal = this.itemTotal + this.shipping + this.tax;
  }

  onSubmit(): void {
    if (this.checkoutForm.valid && !this.submitting) {
      this.submitting = true;

      const checkoutData: CheckoutData = {
        ...this.checkoutForm.value,
        items: this.cartItems,
        orderTotal: this.orderTotal,
        shipping: this.shipping,
        tax: this.tax,
        orderDate: new Date().toISOString()
      };

      this.cartService.clearCart();
      this.router.navigate(['/checkout/success']);

    } else {
      this.alertService.addAlert('Please fill in all required fields correctly.');
    }
  }
}
