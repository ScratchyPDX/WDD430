import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  userActivated = false;
  private subscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe(isActivated => {
      console.log('User activated:', isActivated);
      this.userActivated = isActivated;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

