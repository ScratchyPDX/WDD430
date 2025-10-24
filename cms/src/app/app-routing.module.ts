import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';
import { Contacts } from './contacts/contacts';
import { DocumentEdit } from './documents/document-edit/document-edit';
import { DocumentDetail } from './documents/document-detail/document-detail';


const routes: Routes = [
  { path: 'documents', component: Documents, children: [
    { path: 'new', component: DocumentEdit },
    { path: ':id', component: DocumentDetail },
    { path: ':id/edit', component: DocumentEdit}
  ] },
  { path: 'messages', component: MessageList },
  { path: 'contacts', component: Contacts },
  { path: '**', redirectTo: '/documents' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
