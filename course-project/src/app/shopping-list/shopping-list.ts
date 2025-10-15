import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService ) {
  }

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

}
