import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: false,
  templateUrl: './error-page.html',
  styleUrl: './error-page.css'
})
export class ErrorPage implements OnInit {
  errorMessage: string = 'An unexpected error occurred!';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data) => {
      this.errorMessage = data['errorMessage'];
    });
  }


}
