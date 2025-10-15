import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { NewAccount } from './new-account/new-account';
import { Account } from './account/account';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    App,
    NewAccount,
    Account
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AccountService, LoggingService
  ],
  bootstrap: [App]
})
export class AppModule { }
