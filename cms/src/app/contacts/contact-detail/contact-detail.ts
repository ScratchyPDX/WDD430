import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact/contact.model';

@Component({
  selector: 'app-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.html',
  styleUrls: ['./contact-detail.css']
})
export class ContactDetail implements OnInit, AfterViewInit {
  @Input() contact!: Contact;

  constructor() { }

  ngOnInit() {
    console.log("contact-detail.ts: ngOnInit: " + this.contact?.name);
  }

   ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

}
