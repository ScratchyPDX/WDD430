import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.css'],
  providers: [RecipeService]
})
export class Recipes implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

  }

}
