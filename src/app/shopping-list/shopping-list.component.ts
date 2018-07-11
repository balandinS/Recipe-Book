import { Component, OnInit} from '@angular/core';
import { Ingredien } from '../Shared/ingredient.model';
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
   shoppingListState: Observable<{ingredients: Ingredien[]}>;
  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
      this.shoppingListState = this.store.select('shoppingList');

  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit({index: index}));
  }

}
