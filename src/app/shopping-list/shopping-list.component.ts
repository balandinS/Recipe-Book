import { Component, OnInit } from '@angular/core';
import { Ingredien } from '../Shared/ingredient.model';
import { ShoppingService } from '../Shared/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ ShoppingService ]
})
export class ShoppingListComponent implements OnInit {
   ingredients: Ingredien[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
      this.ingredients = this.shoppingService.getIngredients();
      this.shoppingService.newIngredient
      .subscribe(
          (ingredient: Ingredien) => {
             this.ingredients.push(ingredient);
          }
      );

  }

}
