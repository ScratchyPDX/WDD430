import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})
export class MessageList {
  messages: Message[] = [
    { id: '1', sender: 'John Smith', subject: 'Hello', msgText: 'This is a test message' },
    { id: '2', sender: 'Jane Doe', subject: 'Hi', msgText: 'Another test message' }
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
