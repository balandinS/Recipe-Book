import { EventEmitter } from '@angular/core';
import { Ingredien } from './ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingService {
  newIngredient = new Subject<Ingredien[]>();
  startingEditItem = new Subject<number>();

  private  ingredients;
   constructor() {}

   getIngredient(index: number) {
       return this.ingredients[index];
   }

   getIngredients() {
       return this.ingredients.slice();
   }

   addNewIngredien(ingredient: Ingredien) {
       this.ingredients.push(ingredient);
       this.newIngredient.next(this.ingredients.slice());
   }

   addNewIngrediens(ingredients: Ingredien[]) {
          this.ingredients.push(...ingredients);
          this.newIngredient.next(this.ingredients.slice());
   }
   updateIngredian(index: number, newIngredient: Ingredien) {
       this.ingredients[index] = newIngredient;
       this.newIngredient.next(this.ingredients);
   }

   deleteIngredian(index: number) {
       this.ingredients.splice(index, 1);
       this.newIngredient.next(this.ingredients.slice());

   }
}
