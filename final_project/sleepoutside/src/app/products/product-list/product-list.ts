import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ExternalServicesService } from '../../services/external-services.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [];
  category: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private externalServices: ExternalServicesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || 'tents';
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.loading = true;
    this.error = '';

    this.externalServices.getData(this.category).subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again.';
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  getCategoryTitle(): string {
    return this.category.charAt(0).toUpperCase() + this.category.slice(1).replace('-', ' ');
  }

  sortByName(): void {
    this.products.sort((a, b) => {
      const nameA = a.NameWithoutBrand.toUpperCase();
      const nameB = b.NameWithoutBrand.toUpperCase();
      return nameA.localeCompare(nameB);
    });
  }

  sortByPrice(): void {
    this.products.sort((a, b) => a.ListPrice - b.ListPrice);
  }
}
