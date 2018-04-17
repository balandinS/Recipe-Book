import { EventEmitter } from '@angular/core';
import { Ingredien } from './ingredient.model';

export class ShoppingService {
  newIngredient = new EventEmitter<Ingredien[]>();
  private  ingredients: Ingredien[] = [
        new Ingredien('apples', 6),
        new Ingredien('Tomatos', 10),
    ];
   constructor() {}

   getIngredients() {
       return this.ingredients.slice();
   }

   addNewIngredien(ingredient: Ingredien) {
       this.ingredients.push(ingredient);
       this.newIngredient.emit(this.ingredients.slice());
   }

   addNewIngrediens(ingredients: Ingredien[]) {
          this.ingredients.push(...ingredients);
          this.newIngredient.emit(this.ingredients.slice());
   }
}
