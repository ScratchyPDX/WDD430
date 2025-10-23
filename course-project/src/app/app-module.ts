import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { Recipes } from './recipes/recipes';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';
import { RecipeList } from './recipes/recipe-list/recipe-list';
import { RecipeItem } from './recipes/recipe-list/recipe-item/recipe-item';
import { ShoppingList } from './shopping-list/shopping-list';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RecipesStart } from './recipes/recipes-start/recipes-start';

@NgModule({
  declarations: [
    App,
    Header,
    Recipes,
    RecipeDetail,
    RecipeList,
    RecipeItem,
    ShoppingList,
    ShoppingEdit,
    DropdownDirective,
    RecipesStart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ShoppingListService
  ],
  bootstrap: [App]
})
export class AppModule { }
