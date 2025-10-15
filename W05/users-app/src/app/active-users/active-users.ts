import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  standalone: false,
  templateUrl: './active-users.html',
  styleUrl: './active-users.css'
})
export class ActiveUsers implements OnInit {
  users: string[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
