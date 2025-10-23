import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipesStart } from './recipes/recipes-start/recipes-start';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: Recipes, children: [
    { path: '', component: RecipesStart },
    { path: 'new', component: RecipeEdit },
    { path: ':id', component: RecipeDetail },
    { path: ':id/edit', component: RecipeEdit}
  ]},
  { path: 'shopping-list', component: ShoppingList }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
