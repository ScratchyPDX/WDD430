import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-detail',
  standalone: false,
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css'
})
export class DocumentDetail implements OnInit, AfterViewInit {
  @Input() document: Document;

    ngOnInit() {
    console.log("document-detail.ts: ngOnInit: " + this.document?.name);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

}
