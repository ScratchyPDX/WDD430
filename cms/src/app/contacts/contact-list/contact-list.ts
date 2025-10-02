import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact/contact.model';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList {
  @Output() selectedContactEvent = new EventEmitter<Contact>();
  contacts: Contact[] = [
    new Contact("1", "R. Kent Jackson", "jacksonk@byui.edu", "208-496-3771", "../../assets/images/jacksonk.jpg", null),
    new Contact("2", "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../assets/images/barzeer.jpg", null),
  ];

  constructor() {}

  onContactSelected(contact: Contact) {
    console.log("contact-list.ts: onContactSelected: " + contact.name);
    this.selectedContactEvent.emit(contact);
  }
}
