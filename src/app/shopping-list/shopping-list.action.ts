import { Action } from '@ngrx/store';
import { Ingredien } from '../Shared/ingredient.model';
import { shoppingListReducers } from './shopping-list.reducers';

export const ADD_IGREDIEN = 'ADD_IGREDIEN';
export const ADD_IGREDIENTS = 'ADD_IGREDIENTS';
export const UPPDATE_IGREDIEN = 'UPPDATE_IGREDIEN';
export const DELETE_IGREDIEN = 'DELETE_IGREDIEN';
export const START_EDIT = 'START_EDIT';



export class AddIngrdient implements Action {
   readonly type = 'ADD_IGREDIEN';

   constructor(public payload: Ingredien) {}
}

export class AddIngrdients implements Action {
    readonly type = 'ADD_IGREDIENTS';
     constructor(public payload: Ingredien[]) {}
 }

export class UpdateIngrdient implements Action {
    readonly type = 'UPPDATE_IGREDIEN';
     constructor(public payload: {ingredient: Ingredien}) {}
 }

 export class DeleteIngrdient implements Action {
    readonly type = 'DELETE_IGREDIEN';
 }

 export class StartEdit implements Action {
    readonly type = 'START_EDIT';
     constructor(public payload: {index: number}) {}
 }



export type ShoppingListAction =
AddIngrdient    |
AddIngrdients   |
UpdateIngrdient |
DeleteIngrdient |
StartEdit;
