import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ActiveUsers } from './active-users/active-users';
import { InactiveUsers } from './inactive-users/inactive-users';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    App,
    ActiveUsers,
    InactiveUsers
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    CounterService
  ],
  bootstrap: [App]
})
export class AppModule { }
