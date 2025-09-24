import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  ngOnInit(){}

}
