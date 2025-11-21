import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly CART_KEY = 'so-cart';
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  private cartCountSubject = new BehaviorSubject<number>(0);
  public cartCount: Observable<number> = this.cartCountSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.loadCart();
  }

  private loadCart(): void {
    const cart = this.storageService.getLocalStorage<CartItem[]>(this.CART_KEY) || [];
    this.cartItemsSubject.next(cart);
    this.updateCartCount();
  }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addToCart(product: Product): void {
    const cart = this.getCartItems();
    const existingItem = cart.find(item => item.Id === product.Id);

    if (existingItem) {
      existingItem.Quantity += 1;
    } else {
      const cartItem: CartItem = { ...product, Quantity: 1 };
      cart.push(cartItem);
    }

    this.saveCart(cart);
  }

  removeFromCart(productId: string): void {
    const cart = this.getCartItems().filter(item => item.Id !== productId);
    this.saveCart(cart);
  }

  updateQuantity(productId: string, quantity: number): void {
    const cart = this.getCartItems();
    const item = cart.find(item => item.Id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.Quantity = quantity;
        this.saveCart(cart);
      }
    }
  }

  clearCart(): void {
    this.saveCart([]);
  }

  private saveCart(cart: CartItem[]): void {
    this.storageService.setLocalStorage(this.CART_KEY, cart);
    this.cartItemsSubject.next(cart);
    this.updateCartCount();
  }

  private updateCartCount(): void {
    const cart = this.getCartItems();
    const count = cart.reduce((total, item) => total + item.Quantity, 0);
    this.cartCountSubject.next(count);
  }

  getCartTotal(): number {
    return this.getCartItems().reduce((total, item) => {
      return total + (item.FinalPrice * item.Quantity);
    }, 0);
  }
}
