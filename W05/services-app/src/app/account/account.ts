import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {
  @Input() account: { name: string; status: string; } = { name: '', status: '' };
  @Input() id: number = 0;

  constructor(private loggingService: LoggingService, private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
