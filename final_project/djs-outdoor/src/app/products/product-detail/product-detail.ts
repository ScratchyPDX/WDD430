import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalServicesService } from '../../services/external-services.service';
import { CartService } from '../../services/cart.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit{
  product: Product | null = null;
  loading: boolean = true;
  error: string = '';

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private externalServices: ExternalServicesService,
    private cartService: CartService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(productId);
    } else {
      this.router.navigate(['/']);
    }
  }

  loadProduct(id: string): void {
    this.loading = true;
    this.error = '';

    this.externalServices.findProductById(id).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load product details. Please try again.';
        this.loading = false;
        console.error('Error loading product:', err);
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.alertService.addAlert(`${this.product.Name} added to cart!`);
    }
  }

  getDiscount(): number {
    if (this.product && this.product.SuggestedRetailPrice > this.product.FinalPrice) {
      return Math.round(((this.product.SuggestedRetailPrice - this.product.FinalPrice) / this.product.SuggestedRetailPrice) * 100);
    }
    return 0;
  }
}
