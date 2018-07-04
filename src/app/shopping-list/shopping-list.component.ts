import { Component, OnInit} from '@angular/core';
import { Ingredien } from '../Shared/ingredient.model';
import { ShoppingService } from '../Shared/shoppingList.service';
import { ShoppingListAction } from './shopping-list.action';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import * as fromShoppingList from './shopping-list.reducers';
import * as ShoppingListActions from './shopping-list.action';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ ]
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Store<{ingredients: Ingredien[]}>;
   shoppingLinkState: Observable<{ingredients: Ingredien[]}>;
  constructor(private shoppingService: ShoppingService, private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
      this.shoppingListState = this.store.select('shoppingList');

  }

  onEditItem(index: number) {
    this.shoppingService.startingEditItem.next(index);
  }

}
