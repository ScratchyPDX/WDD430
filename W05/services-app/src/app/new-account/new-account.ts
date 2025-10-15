import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  standalone: false,
  templateUrl: './new-account.html',
  styleUrl: './new-account.css'
})
export class NewAccount {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
