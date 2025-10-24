import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-edit',
  standalone: false,
  templateUrl: './document-edit.html',
  styleUrl: './document-edit.css'
})
export class DocumentEdit implements OnInit {

  ngOnInit() {
    console.log('DocumentEdit initialized');
  }
}
