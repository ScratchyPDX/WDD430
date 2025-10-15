import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  standalone: false,
  templateUrl: './new-account.html',
  styleUrl: './new-account.css'
})
export class NewAccount {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
