import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from '../contact/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.html',
  styleUrls: ['./contact-detail.css']
})
export class ContactDetail implements OnInit, AfterViewInit, OnDestroy {
  contact: Contact;
  private routeSubscription: Subscription;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("ContactDetail ngOnInit called");
    try {
      this.routeSubscription = this.route.params.subscribe(params => {
        console.log("Route params received:", params);
        const id = params['id'];
        console.log("Contact ID from route:", id);
        if (id) {
          this.contact = this.contactService.getContact(id);
          console.log("Contact fetched from service:", this.contact);
          if (this.contact) {
            console.log("contact-detail.ts: ngOnInit: " + this.contact.name);
          } else {
            console.error("Contact not found with id: " + id);
            console.log("Contact not found - staying on current route for debugging");
          }
        } else {
          console.error("No contact ID provided in route");
        }
      });
    } catch (error) {
      console.error("Error in ContactDetail ngOnInit:", error);
    }
  }

   ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

  ngOnDestroy(): void {
    console.log('ContactDetail ngOnDestroy called');
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
