import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Users } from './users/users';
import { Servers } from './servers/servers';
import { User } from './users/user/user';
import { EditServer } from './servers/edit-server/edit-server';
import { Server } from './servers/server/server';
import { PageNotFound } from './page-not-found/page-not-found';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPage } from './error-page/error-page';
import { ServerResolverService } from './servers/server/server-resolver.service';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: Users, children: [
    { path: ':id/:name', component: User }
  ]},
  // { path: 'servers', canActivate: [AuthGuardService], component: Servers, children: [
  { path: 'servers', canActivateChild: [AuthGuardService], component: Servers, children: [
    { path: ':id', component: Server, resolve: {server: ServerResolverService} },
    { path: ':id/edit', component: EditServer, canDeactivate: [CanDeactivateGuard] }
  ]},
  // { path: 'not-found', component: PageNotFound},
  { path: 'not-found', component: ErrorPage, data: { errorMessage: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})], // useHash for older servers that do not support HTML5 routing
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
