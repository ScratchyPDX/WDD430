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
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  id: string;
  availableContacts: Contact[] = [];
  selectedContactId: string = '';

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.availableContacts = this.contactService.getContacts();
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
      this.updateAvailableGroupContacts();
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

  updateAvailableGroupContacts() {
    // get all contacts and the IDs of the current group members
    const allContacts = this.contactService.getContacts();
    // get the IDs of the current group members
    const groupContactIds = this.groupContacts.map(c => c.id);
    // filter out contacts already in the group or the contact being edited
    this.availableContacts = allContacts.filter((contact) => {
      return !groupContactIds.includes(contact.id) && contact.id !== this.contact.id;
    });
  }

  onAddContactToGroup() {
    if (!this.selectedContactId) {
      return;
    }

    const contactToAdd = this.contactService.getContact(this.selectedContactId);
    if (contactToAdd && !this.groupContacts.find(c => c.id === contactToAdd.id)) {
      this.groupContacts.push(contactToAdd);
      this.selectedContactId = ''; // reset selection
      this.updateAvailableGroupContacts(); // update available list
    }
  }

  onRemoveContactFromGroup(index: number) {
    if (index >= 0 && index < this.groupContacts.length) {
      this.groupContacts.splice(index, 1);
      this.updateAvailableGroupContacts(); // update available list
    }
  }

}
