import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Home } from './home/home';
import { User } from './user/user';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    App,
    Home,
    User
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
