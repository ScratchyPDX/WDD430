import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Users } from './users/users';
import { Servers } from './servers/servers';
import { Home } from './home/home';
import { EditServer } from './servers/edit-server/edit-server';
import { Server } from './servers/server/server';
import { FormsModule } from '@angular/forms';
import { User } from './users/user/user';
import { PageNotFound } from './page-not-found/page-not-found';
import { ErrorPage } from './error-page/error-page';

@NgModule({
  declarations: [
    App,
    Home,
    Users,
    Servers,
    User,
    EditServer,
    Server,
    PageNotFound,
    ErrorPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
