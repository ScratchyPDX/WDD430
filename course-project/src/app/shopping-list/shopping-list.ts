import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList implements OnInit, OnDestroy{
  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService ) {
  }

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
