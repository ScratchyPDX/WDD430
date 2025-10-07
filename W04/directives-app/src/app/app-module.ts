import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlight } from './directives/better-highlight/better-highlight';
import { Unless } from './unless/unless';

@NgModule({
  declarations: [
    App,
    BasicHighlightDirective,
    BetterHighlight,
    Unless
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
