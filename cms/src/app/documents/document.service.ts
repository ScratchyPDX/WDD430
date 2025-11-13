import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId = 0;
  firebaseUrl = 'https://scratchypdx-cms-default-rtdb.firebaseio.com/documents.json';

  constructor(private httpClient: HttpClient) {}

  getDocuments() {
    this.httpClient.get<Document[]>(this.firebaseUrl).subscribe(
      (documents: Document[]) => {
        this.documents = documents.sort((a, b) => a.name.localeCompare(b.name));
        console.log('Documents fetched from Firebase:', this.documents);
        this.documentListChangedEvent.next(this.documents.slice());
        this.maxDocumentId = this.getMaxId();
      },
      (error) => {
        console.error('Error fetching documents from Firebase:', error);
      }
    );
    return this.documents.slice();
  }

  getDocument(id: string) {
    return this.documents.find((document) => document.id === id);
  }

  getMaxId(): number {
    let maxId = 0;
    for (const document of this.documents) {
      const currentId = parseInt(document.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    this.storeDocuments(this.documents);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }
    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }
    this.documents[pos] = newDocument;
    this.storeDocuments(this.documents);
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.storeDocuments(this.documents);
  }

  storeDocuments(documents: Document[]) {
    const documentsJson = JSON.stringify(documents);
    this.httpClient.put(this.firebaseUrl, documentsJson, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      () => {
        this.documentListChangedEvent.next(this.documents.slice());
      },
      (error) => {
        console.error('Error storing documents to Firebase:', error);
      }
    );
  }
}
