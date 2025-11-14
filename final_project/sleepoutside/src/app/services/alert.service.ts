import { Injectable } from '@angular/core';
import { AlertMessage } from '../models/alert-message.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertsSubject = new BehaviorSubject<AlertMessage[]>([]);
  public alerts$: Observable<AlertMessage[]> = this.alertsSubject.asObservable();
  private alertIdCounter = 0;

  addAlert(message: string): void {
    const alerts = this.alertsSubject.value;
    const newAlert: AlertMessage = {
      message,
      id: this.alertIdCounter++
    };
    this.alertsSubject.next([newAlert, ...alerts]);
  }

  removeAlert(id: number): void {
    const alerts = this.alertsSubject.value.filter(alert => alert.id !== id);
    this.alertsSubject.next(alerts);
  }

  clearAlerts(): void {
    this.alertsSubject.next([]);
  }
}
