import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Server } from './server/server';
import { Servers } from './servers/servers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Server,
    Servers
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
