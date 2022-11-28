import { Recipe } from "./recipe.model";
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://www.cookipedia.co.uk/wiki/images/e/ea/Gazpacho_ligero_con_mostaza_recipe.jpg'),
        new Recipe('Another test recipe', 'This is also a test', 'https://www.cookipedia.co.uk/wiki/images/e/ea/Gazpacho_ligero_con_mostaza_recipe.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}