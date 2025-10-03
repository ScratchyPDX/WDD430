import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  standalone: false,
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css'
})
export class MessageEdit {
  @Output() addMessageEvent = new EventEmitter<Message>();
  @ViewChild('messageTextInput', {static: false}) messageTextInputRef: ElementRef;
  @ViewChild('subjectInput', {static: false}) subjectInputRef: ElementRef;

  currentSender: string = 'David Ward';

  onSendMessage() {
    const messageText = this.messageTextInputRef.nativeElement.value;
    const subjectText = this.subjectInputRef.nativeElement.value;
    const newMessage = new Message("1", this.currentSender, subjectText, messageText);
    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.messageTextInputRef.nativeElement.value = '';
    this.subjectInputRef.nativeElement.value = '';
  }
}
