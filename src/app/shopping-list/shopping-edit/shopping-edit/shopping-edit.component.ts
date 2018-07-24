import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredien } from '../../../Shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import * as ShoppingListActions from '../../shopping-list.action';
import * as fromApp from '../../../store/app.redacers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  isStartedEdit = false;
  editedItem: Ingredien;
  subscription = new Subscription();
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editedItem = data.editedIngredient;
          this.isStartedEdit = true;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        } else {
          this.isStartedEdit = false;
        }
      });
  }
  onPush(form: NgForm) {
    const value = form.value;
    const ingredien = new Ingredien(value.name, value.amount);
    if (this.isStartedEdit) {
      this.store.dispatch(new ShoppingListActions.UpdateIngrdient({ ingredient: ingredien }));
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
    this.store.dispatch(new ShoppingListActions.DeleteIngrdient());
    this.onClear();
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopedEdit());
    this.subscription.unsubscribe();
    this.isStartedEdit = false;
  }
}
