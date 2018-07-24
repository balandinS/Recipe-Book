import * as fromShoppingList from '../shopping-list/shopping-list.reducers';
import * as fromAuth from '../auth/storage/auth.redacers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  // tslint:disable-next-line:semicolon
  shoppingList: fromShoppingList.State,
  // tslint:disable-next-line:semicolon
  auth: fromAuth.State
}

export const reducer: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducers,
    auth: fromAuth.redacersAuth
};
