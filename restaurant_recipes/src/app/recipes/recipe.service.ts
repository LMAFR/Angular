import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "src/shared/ingredient.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 
                    'This is simply a test', 
                    'https://www.cookipedia.co.uk/wiki/images/e/ea/Gazpacho_ligero_con_mostaza_recipe.jpg',
                    [ new Ingredient('Tomatoes', 5),
                      new Ingredient('Jamon', 1),
                      new Ingredient('Bread', 1)
                    ]
                    ),
        new Recipe('Another test recipe', 
                    'This is also a test',
                    'https://upload.wikimedia.org/wikipedia/commons/9/93/Carl%27s_Jr_Big_Burger_%2841516298835%29.jpg',
                    [new Ingredient('Bread', 1),
                     new Ingredient('Meat', 1)]
                     )
      ];
    recipeSelected = new EventEmitter<Recipe>();
    
    getRecipes() {
        return this.recipes.slice();
    }
}