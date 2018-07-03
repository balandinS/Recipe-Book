import { EventEmitter } from '@angular/core';
import { Ingredien } from './ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingService {
  newIngredient = new Subject<Ingredien[]>();
  startingEditItem = new Subject<number>();

    private ingredients: Ingredien[] =
        [
        new Ingredien('apples', 6),
        new Ingredien('Tomatos', 10),
        ]
    ;
    constructor() { }

   getIngredient(index: number) {
       return this.ingredients[index];
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
