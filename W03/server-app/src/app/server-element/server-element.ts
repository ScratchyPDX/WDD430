import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: false,
  templateUrl: './server-element.html',
  styleUrl: './server-element.css'
})
export class ServerElement {

  @Input('srvElement') element!: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {

  }

}
