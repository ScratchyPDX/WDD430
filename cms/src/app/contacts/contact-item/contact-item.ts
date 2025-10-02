import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact/contact.model';

@Component({
  selector: 'app-contact-item',
  standalone: false,
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css'
})
export class ContactItem {
  @Output() contactSelected = new EventEmitter<void>();
  @Input() contact: Contact;
  constructor() {}

  onSelected() {
    this.contactSelected.emit();
    console.log("contact-item.ts: onSelected: " + this.contact.name);
  }
}
