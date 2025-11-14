import { Component } from '@angular/core';
import { ExternalServicesService } from '../services/external-services.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  orders: Order[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private externalServices: ExternalServicesService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    this.error = '';

    this.externalServices.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load orders. Please try again.';
        this.loading = false;
        console.error('Error loading orders:', err);
      }
    });
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleString();
  }
}
