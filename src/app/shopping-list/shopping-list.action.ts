import { Action } from '@ngrx/store';
import { Ingredien } from '../Shared/ingredient.model';
import { shoppingListReducers } from './shopping-list.reducers';

export const ADD_IGREDIEN = 'ADD_IGREDIEN';

export class AddIngrdient implements Action {
   readonly type = 'ADD_IGREDIEN';
   payload: Ingredien;
}

export type ShoppingListAction =  AddIngrdient;
