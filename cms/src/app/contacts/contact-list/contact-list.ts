import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contact/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
  }

  onContactSelected(contact: Contact) {
    console.log("contact-list.ts: onContactSelected: " + contact.name);
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
