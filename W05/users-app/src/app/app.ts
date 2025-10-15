import { Component, signal } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  providers: [UserService]

})
export class App {
  protected readonly title = signal('users-app');
}
