import { emitDistinctChangesOnlyDefaultValue } from "@angular/compiler";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
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
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        // The spread operator (...) allow us to push each element of a list directly, instead of using the for loop above, which implies emitting more events.
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}