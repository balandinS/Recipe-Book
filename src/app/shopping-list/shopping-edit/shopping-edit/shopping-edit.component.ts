import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredien } from '../../../Shared/ingredient.model';
import { ShoppingService } from '../../../Shared/shoppingList.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import * as ShoppingListActions from '../../shopping-list.action';
import * as fromShoppingList from '../../shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  isStartedEdit = false;
  @ViewChild('f') slForm: NgForm;
  intgrdient: Ingredien;
  editedItemIndex: number;
  subscription = new Subscription();
  constructor(private shoppingService: ShoppingService,  private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startingEditItem.subscribe(
       (index: number) => {
         this.isStartedEdit =  true;
         this.editedItemIndex = index;
         this.intgrdient = this.shoppingService.getIngredient(index);
         this.slForm.setValue({
           name: this.intgrdient.name,
           amount: this.intgrdient.amount
         });
     });
  }
  onPush(form: NgForm) {
    const value = form.value;
    const ingredien = new Ingredien(value.name, value.amount);
    if (this.isStartedEdit) {
     this.store.dispatch(new ShoppingListActions.UpdateIngrdient({index: this.editedItemIndex, ingredient: ingredien}));
      this.slForm.reset();
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngrdient(ingredien));
    }
    this.isStartedEdit = false;
    form.reset();
  }

  onClear() {
   this.slForm.reset();
   this.isStartedEdit = false;

  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngrdient({index: this.editedItemIndex}));
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.isStartedEdit = false;
  }
}
