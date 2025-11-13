import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient } from '@angular/common/http';
import { max } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];
  messageSelectedEvent = new EventEmitter<Message>();
  messageChangedEvent = new EventEmitter<Message[]>();
  firebaseUrl = "https://scratchypdx-cms-default-rtdb.firebaseio.com/messages.json";
  maxMessageId = 0;

  constructor(private httpClient: HttpClient) { }

  getMessages(): Message[] {
    this.httpClient.get<Message[]>(this.firebaseUrl).subscribe(
      (messages: Message[]) => {
        this.messages = messages;
        this.messageChangedEvent.emit(this.messages.slice());
        this.maxMessageId = this.getMaxId();
        console.log('Messages fetched from Firebase:', this.messages);
        console.log('Max message ID:', this.maxMessageId);
      });
    return this.messages.slice();
  }


  getMaxId(): number {
    let maxId = 0;
    for (const message of this.messages) {
      const currentId = parseInt(message.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  getMessage(id: string): Message {
    return this.messages.find((message) => message.id === id);
  }

  addMessage(message: Message) {
    this.maxMessageId++;
    message.id = this.maxMessageId.toString();
    this.messages.push(message);
    this.storeMessages(this.messages);
    this.messageChangedEvent.emit(this.messages.slice());
  }

  storeMessages(messages: Message[]) {
    const messagesJson = JSON.stringify(messages);
    this.httpClient.put(this.firebaseUrl, messagesJson, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      () => {
        this.messageChangedEvent.emit(this.messages.slice());
      },
      (error) => {
        console.error('Error storing documents to Firebase:', error);
      }
    );
  }
}
