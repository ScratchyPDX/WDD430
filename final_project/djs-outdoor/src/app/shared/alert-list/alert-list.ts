import { Component } from '@angular/core';
import { AlertMessage } from '../../models/alert-message.model';
import { Observable } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert-list',
  standalone: false,
  templateUrl: './alert-list.html',
  styleUrl: './alert-list.css',
})
export class AlertList {
  alerts!: Observable<AlertMessage[]>;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alerts = this.alertService.alerts$;
  }

  closeAlert(id: number): void {
    this.alertService.removeAlert(id);
  }
}
