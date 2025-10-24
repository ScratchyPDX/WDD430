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
    this.routeSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
        this.contact = this.contactService.getContact(id);
    });
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
