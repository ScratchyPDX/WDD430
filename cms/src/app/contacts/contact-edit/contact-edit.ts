import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../contact/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  standalone: false,
  templateUrl: './contact-edit.html',
  styleUrl: './contact-edit.css'
})
export class ContactEdit implements OnInit{
  contact: Contact = {id: '', name: '', email: '', phone: '', imageUrl: '', group: []};
  originalContact: Contact;
  groupContacts: any[] = [];
  editMode: boolean = false;
  id: string;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.editMode = !!this.id;
      this.originalContact = this.contactService.getContact(this.id);
      if (!this.originalContact) {
        return;
      }
      this.editMode = true;
      this.contact = { ...this.originalContact };
      if (this.contact.group) {
        this.groupContacts = [...this.contact.group];
      }
    });

  }

  onSubmit() {
   const newContact = new Contact('', this.contact.name, this.contact.email, this.contact.phone, this.contact.imageUrl, this.groupContacts);
   if (this.editMode) {
     this.contactService.updateContact(this.originalContact, newContact);
   } else {
     this.contactService.addContact(newContact);
   }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }

}
