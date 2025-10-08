import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  @Input() documents: Document[] = [
    new Document("1", "Document 1", "Document 1 description", "url", []),
    new Document("2", "Document 2", "Document 2 description", "url", []),
    new Document("3", "Document 3", "Document 3 description", "url", []),
    new Document("4", "Document 4", "Document 4 description", "url", []),
  ]

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit()
  }

}
