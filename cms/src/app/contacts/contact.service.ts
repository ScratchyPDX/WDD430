import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact/contact.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new Subject<Contact[]>();
  maxContactId = 0;
  firebaseUrl = "https://scratchypdx-cms-default-rtdb.firebaseio.com/contacts.json";

  constructor(private httpClient: HttpClient) { }

  getContacts(): Contact[] {
    this.httpClient.get<Contact[]>(this.firebaseUrl).subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
        this.contactChangedEvent.next(this.contacts.slice());
        this.maxContactId = this.getMaxId();
      },
      (error) => {
        console.error('Error fetching contacts from Firebase:', error);
      }
    );
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    return this.contacts.find((contact) => contact.id === id);
  }

  getMaxId(): number {
    let maxId = 0;
    for (const contact of this.contacts) {
      const currentId = parseInt(contact.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addContact(newContact: Contact): void {
    if (!newContact) {
      return;
    }
    this.maxContactId++;
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);
    this.storeContacts(this.contacts);
  }

  updateContact(originalContact: Contact, newContact: Contact): void {
    if (!originalContact || !newContact) {
      return;
    }
    const pos = this.contacts.findIndex(c => c.id === originalContact.id);
    if (pos < 0) {
      return;
    }
    this.contacts[pos] = newContact;
    this.storeContacts(this.contacts);
  }

  deleteContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.storeContacts(this.contacts);
    }
  }

  storeContacts(contacts: Contact[]) {
    const contactsJson = JSON.stringify(contacts);
    this.httpClient.put(this.firebaseUrl, contactsJson, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      () => {
        this.contactChangedEvent.next(this.contacts.slice());
      },
      (error) => {
        console.error('Error storing documents to Firebase:', error);
      }
    );
  }
}
