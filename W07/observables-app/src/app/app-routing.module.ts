import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { User } from './user/user';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'user/:id', component: User}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
