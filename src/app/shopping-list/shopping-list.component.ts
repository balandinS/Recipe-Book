import { Component, OnInit} from '@angular/core';
import { Ingredien } from '../Shared/ingredient.model';
import { ShoppingService } from '../Shared/shoppingList.service';
import { ShoppingListAction } from './shopping-list.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ ]
})
export class ShoppingListComponent implements OnInit {
   shoppingLinkState: Observable<{ingredients: Ingredien[]}>;
  constructor(private shoppingService: ShoppingService, private store: Store<{shoppingList: {ingredients: Ingredien[]}}>) { }

  ngOnInit() {
      this.shoppingLinkState = this.store.select('shoppingList');

  }

  onEditItem(index: number) {
    this.shoppingService.startingEditItem.next(index);
  }

}
