import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowRef {

  constructor() {}

  getNativeWindow() {
    return window;
  }
}
