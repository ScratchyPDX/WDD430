import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-item',
  standalone: false,
  templateUrl: './document-item.html',
  styleUrl: './document-item.css'
})
export class DocumentItem {
  @Output() documentSelected = new EventEmitter<void>();
  @Input() document: Document

    onSelected() {
    this.documentSelected.emit();
    console.log("document-item.ts: onSelected: " + this.document.name);
  }
}
