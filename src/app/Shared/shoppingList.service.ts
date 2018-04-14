import { EventEmitter } from '@angular/core';
import { Ingredien } from './ingredient.model';

export class ShoppingService {
  newIngredient = new EventEmitter<Ingredien>();
  private  ingredients: Ingredien[] = [
        new Ingredien('apples', 6),
        new Ingredien('Tomatos', 10),
    ];
   constructor() {}

   getIngredients() {
       return this.ingredients.slice();
   }

   addNewIngredien(name: string, amount: number) {
       this.ingredients.push({name, amount});
   }
}
