import { Component, signal } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  providers: [UsersService]

})
export class App {
  protected readonly title = signal('users-app');
}
