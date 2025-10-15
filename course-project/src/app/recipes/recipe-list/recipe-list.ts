import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit(): void {
      this.recipes = this.recipeService.getRecipes();
  }

}
