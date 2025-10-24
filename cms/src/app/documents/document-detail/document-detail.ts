import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { WindowRef } from '../../window-ref';

@Component({
  selector: 'app-document-detail',
  standalone: false,
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css'
})
export class DocumentDetail implements OnInit, AfterViewInit {
  document: Document;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router,
    private windowRef: WindowRef
  ) {}

  ngOnInit() {
    this.nativeWindow = this.windowRef.getNativeWindow();
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.document = this.documentService.getDocument(id);
        if (!this.document) {
          this.router.navigate(['/documents']);
        }
      }
    });
  }

  ngAfterViewInit(): void {

  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }
  
}
