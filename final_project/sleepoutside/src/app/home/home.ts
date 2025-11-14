import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  onSearchChange(value: string): void {
    // TODO: Implement search functionality
    console.log('Search value:', value);
  }
}
