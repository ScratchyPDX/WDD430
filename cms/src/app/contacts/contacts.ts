import { Component, OnInit } from '@angular/core';
import { Contact } from './contact/contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts implements OnInit {
  selectedContact: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );
  }

  onContactSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
