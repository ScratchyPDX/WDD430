import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';
import { Contacts } from './contacts/contacts';


const routes: Routes = [
  { path: 'documents', component: Documents },
  { path: 'messages', component: MessageList },
  { path: 'contacts', component: Contacts },
  { path: '**', redirectTo: '/documents' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
