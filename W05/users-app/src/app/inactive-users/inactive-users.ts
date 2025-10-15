import { Component } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  standalone: false,
  templateUrl: './inactive-users.html',
  styleUrl: './inactive-users.css'
})
export class InactiveUsers {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
