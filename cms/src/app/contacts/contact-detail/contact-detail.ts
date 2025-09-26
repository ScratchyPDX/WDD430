import { Component } from '@angular/core';
import { Contact } from '../contact/contact.model';

@Component({
  selector: 'app-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.css'
})
export class ContactDetail {
  // contact: Contact = new Contact("2", "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../assets/images/barzeer.jpg", null);
  contact: Contact = null;

  constructor() { }
}
