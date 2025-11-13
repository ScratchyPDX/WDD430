import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactsFilter',
  standalone: false
})
export class ContactsFilterPipe implements PipeTransform {

  transform(contacts: any[], searchTerm: string): any[] {
    let filteredContacts = [];
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(filteredContacts.length === 0){
      return contacts;
    }
    return filteredContacts;
  }
}
