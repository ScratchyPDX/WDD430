import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
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

  ngOnInit(): void {
      const contact: Contact = this.contactService.getContact(this.message.sender);
      this.messageSender = contact.name;
  }
}
