import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})
export class MessageList implements OnInit{
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

onSelectedMessage(message: Message) {
    console.log("message-list.ts: onSelectedMessage: " + message.subject);
    this.messageService.messageSelectedEvent.emit(message);
  }

}
