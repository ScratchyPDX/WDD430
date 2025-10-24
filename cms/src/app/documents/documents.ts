import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from './document.model';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  standalone: false,
  templateUrl: './documents.html',
  styleUrl: './documents.css'
})
export class Documents implements OnInit{
  selectedDocument: Document;

  constructor (private documentService: DocumentService, private router: Router ) {}

  ngOnInit(): void {
    this.documentService.documentSelectedEvent.subscribe(
      (document: Document) => {
        this.selectedDocument = document;
        this.router.navigate(['/documents', document.id]);
      }
    );
  }
}
