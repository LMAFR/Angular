import { Ingredient } from "src/shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [ 
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
        // Slice is used in the line below to return a copy of the array, not the real one.
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
    }
}