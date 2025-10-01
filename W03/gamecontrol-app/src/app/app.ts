import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  oddNumber:number[] = [];
  evenNumber:number[] = [];

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0) {
      this.evenNumber.push(firedNumber);
    } else {
      this.oddNumber.push(firedNumber);
    }
  }
}
