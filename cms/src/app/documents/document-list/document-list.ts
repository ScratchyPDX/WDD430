import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document("1", "WDD 430 - Document 1", "WDD 430 - Document 1 description", "../../assets/documents/document-1.txt", []),
    new Document("2", "WDD 430 - Document 2", "WDD 430 - Document 2 description", "../../assets/documents/document-2.txt", []),
    new Document("3", "WDD 430 - Document 3", "WDD 430 - Document 3 description", "../../assets/documents/document-3.txt", []),
    new Document("4", "WDD 430 - Document 4", "WDD 430 - Document 4 description", "../../assets/documents/document-4.txt", []),
    new Document("5", "WDD 430 - Document 5", "WDD 430 - Document 5 description", "../../assets/documents/document-5.txt", [])
  ]

  onSelectedDocument(document: Document) {
    console.log("document-list.ts: onSelectedDocument: " + document.name);
    this.selectedDocumentEvent.emit(document)
  }

}
