import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.css'],
  providers: [RecipeService]
})
export class Recipes implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.selectedRecipe = null;
  }

  ngOnInit(): void {
    this.recipeService.recipesSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
