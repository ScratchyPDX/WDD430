import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-edit',
  standalone: false,
  templateUrl: './document-edit.html',
  styleUrl: './document-edit.css'
})
export class DocumentEdit implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  originalDocument: Document;
  document: Document = {id: '', name: '', description: '', url: '', children: []};
  editMode: boolean = false;

  constructor(private documentService: DocumentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log("ngOnInit called with id:", id);
      if (!id) {
        this.editMode = false;
        return;
      }
      this.originalDocument = this.documentService.getDocument(id);
      if (!this.originalDocument) {
        return;
      }
      this.editMode = true;
      this.document = { ...this.originalDocument };
    });
  }

  onSubmit(form: NgForm) {
    console.log("onSubmit called: document =", this.document);
    const newDocument = new Document(this.document.id, this.document.name, this.document.description, this.document.url, []);
    console.log(newDocument);
    if (this.editMode) {
      // newDocument.id = this.originalDocument.id;
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }
    this.router.navigate(['/documents']);
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }
}
