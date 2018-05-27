import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredien } from '../Shared/ingredient.model';
import { ShoppingService } from '../Shared/shoppingList.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
   ingredients: Ingredien[];
   private subscribtion:  Subscription;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
      this.ingredients = this.shoppingService.getIngredients();
        this.subscribtion =  this.shoppingService.newIngredient
          .subscribe(
          (ingredients: Ingredien[]) => {
          this.ingredients = ingredients;
          }
      );

  }

  onEditItem(index: number) {
    this.shoppingService.startingEditItem.next(index);
  }

  ngOnDestroy() {
      this.subscribtion.unsubscribe();
  }
}
