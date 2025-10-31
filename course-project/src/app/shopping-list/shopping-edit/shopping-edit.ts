import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css'
})
export class ShoppingEdit implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  items: { name: string; amount: number }[] = [];
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      // Populate the form with the ingredient data
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    if (this.editMode) {
      const name = form.value.name;
      const amount = form.value.amount;
      const newIngredient = new Ingredient(name, Number(amount));
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else {
      const name = form.value.name;
      const amount = form.value.amount;
      const newIngredient = new Ingredient(name, Number(amount));
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
