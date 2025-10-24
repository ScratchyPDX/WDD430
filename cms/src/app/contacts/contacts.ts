import { Component, OnInit } from '@angular/core';
import { Contact } from './contact/contact.model';
import { ContactService } from './contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts implements OnInit {
  selectedContact: Contact;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
        this.router.navigate(['/contacts', contact.id]);
      }
    );
  }

}
