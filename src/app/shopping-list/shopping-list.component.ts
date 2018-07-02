import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredien } from '../Shared/ingredient.model';
import { ShoppingService } from '../Shared/shoppingList.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingListAction } from './shopping-list.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
   shoppingLinkState: Observable<{ingredients: Ingredien[]}>;
   private subscribtion:  Subscription;
  constructor(private shoppingService: ShoppingService, private store: Store<{shoppingList: {ingredients: Ingredien[]}}>) { }

  ngOnInit() {
      this.shoppingLinkState = this.store.select('shoppingList');

  }

  onEditItem(index: number) {
    this.shoppingService.startingEditItem.next(index);
  }

  ngOnDestroy() {
      // this.subscribtion.unsubscribe();
  }
}
