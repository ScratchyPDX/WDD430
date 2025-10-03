import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('cms');

  loadedFeature = 'document';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
