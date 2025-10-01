import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  standalone: false,
  templateUrl: './game-control.html',
  styleUrl: './game-control.css'
})
export class GameControl {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
