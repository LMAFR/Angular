import { Recipe } from "./recipe.model";
import { Injectable } from '@angular/core';
import { Ingredient } from "src/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

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
                    [new Ingredient('Buns', 2),
                     new Ingredient('Meat', 1)]
                     )
      ];

    constructor(private slService:ShoppingListService){ }
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index:number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(newRecipe: Recipe, index:number){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}