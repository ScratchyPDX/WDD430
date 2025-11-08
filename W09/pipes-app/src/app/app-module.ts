import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter-pipe';
import { ReversePipe } from './reverse-pipe';
import { SortPipe } from './sort-pipe';

@NgModule({
  declarations: [
    App,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe
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
