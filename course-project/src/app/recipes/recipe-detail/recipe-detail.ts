import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css']
})
export class RecipeDetail implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
