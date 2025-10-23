import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipesStart } from './recipes/recipes-start/recipes-start';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: Recipes, children: [
    { path: '', component: RecipesStart },
    { path: ':id', component: RecipeDetail }
  ]},
  { path: 'shopping-list', component: ShoppingList }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
