import { Component } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  standalone: false,
  templateUrl: './active-users.html',
  styleUrl: './active-users.css'
})
export class ActiveUsers {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
