import { Component } from '@angular/core';
import { Contact } from './contact/contact.model';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {
  selectedContact: Contact;

}
