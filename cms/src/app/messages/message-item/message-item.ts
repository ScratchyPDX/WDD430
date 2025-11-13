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
    this.contactService.getContacts();
    console.log('MessageItem initialized with message:', this.message);
    console.log('Fetching sender contact with ID:', this.message.sender);
    const contact: Contact = this.contactService.getContact(this.message.sender);
    console.log('Current contact:', contact);
    this.messageSender = contact.name;
  }
}
