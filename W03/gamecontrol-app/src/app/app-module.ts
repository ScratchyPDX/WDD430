import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { GameControl } from './game-control/game-control';
import { Odd } from './odd/odd';
import { Even } from './even/even';

@NgModule({
  declarations: [
    App,
    GameControl,
    Odd,
    Even
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
