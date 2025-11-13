import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { ContactService } from '../../contacts/contact.service';
import { Contact } from '../../contacts/contact/contact.model';

@Component({
  selector: 'app-message-item',
  standalone: false,
  templateUrl: './message-item.html',
  styleUrl: './message-item.css'
})
export class MessageItem implements OnInit {
  @Input() message: Message;
  messageSender: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    // try to get the contact immediately
    const contact: Contact = this.contactService.getContact(this.message.sender);
    if (contact) {
      this.messageSender = contact.name;
    } else {
      // if contact not found, wait for contacts to load
      this.contactService.contactChangedEvent.subscribe(
        (contacts: Contact[]) => {
          const loadedContact = contacts.find(c => c.id === this.message.sender);
          if (loadedContact) {
            this.messageSender = loadedContact.name;
          }
        }
      );
    }
  }
}
