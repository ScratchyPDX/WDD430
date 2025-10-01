import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Cockpit } from './cockpit/cockpit';
import { ServerElement } from './server-element/server-element';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Cockpit,
    ServerElement
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
