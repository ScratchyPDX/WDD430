import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../contact/contact.model';

@Component({
  selector: 'app-contact-edit',
  standalone: false,
  templateUrl: './contact-edit.html',
  styleUrl: './contact-edit.css'
})
export class ContactEdit implements OnInit{
  @ViewChild('contactForm') contactForm: any;
  contact: Contact = {id: '', name: '', email: '', phone: '', imageUrl: '', group: []};
  groupContacts: any[] = [];

  constructor() { }

  ngOnInit() {
    // Initialize the component
  }

  onSubmit() {
    // Handle form submission
  }

}
