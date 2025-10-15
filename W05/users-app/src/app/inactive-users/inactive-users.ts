import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  standalone: false,
  templateUrl: './inactive-users.html',
  styleUrl: './inactive-users.css'
})
export class InactiveUsers implements OnInit {
  users: string[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
