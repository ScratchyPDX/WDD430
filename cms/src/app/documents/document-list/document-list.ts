import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList implements OnInit {

  documents: Document[] = [];

  constructor(private documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
    console.log("document-list.ts: ngOnInit: " + this.documents.length);
  }
}
