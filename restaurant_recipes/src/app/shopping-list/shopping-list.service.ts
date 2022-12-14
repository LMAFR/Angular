// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()
    private ingredients: Ingredient[] = [ 
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes',10)
    ];
    startedEditing = new Subject<number>();

    getIngredients(){
        // Slice is used in the line below to return a copy of the array, not the real one.
        return this.ingredients.slice();
    }
    
    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        // The spread operator (...) allow us to push each element of a list directly, instead of using the for loop above, which implies emitting more events.
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}