import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  user: {id: number, name: string};

  constructor() { }

  ngOnInit() {
  }

}
