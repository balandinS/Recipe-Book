import * as ShoppingListAction from './shopping-list.action';
import { Ingredien } from '../Shared/ingredient.model';
import { State } from '@ngrx/store';

export interface AppState {

 ingredients1: Ingredien[];
 editedIngredient: Ingredien;
 editedIngredientIndex: number;
}
const initialState = {
    ingredients: [
        new Ingredien('apples', 6),
        new Ingredien('Tomatos', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
export function shoppingListReducers(state = initialState, action: ShoppingListAction.ShoppingListAction) {
    switch (action.type) {
        case ShoppingListAction.ADD_IGREDIEN: return {
            ...state,
            ingredients: [...state.ingredients, action.payload]
        };
        case ShoppingListAction.ADD_IGREDIENTS: return {
            ...state,
            ingredients: [...state.ingredients, ...action.payload]
        };
        case ShoppingListAction.UPPDATE_IGREDIEN:
            const ingredient = state[action.payload.index];
            const updateIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[action.payload.index] = updateIngredient;
            return {
                ...state,
                ingredients: ingredients
            };
        case ShoppingListAction.DELETE_IGREDIEN:
        const oldIngredients = [...state.ingredients];
        oldIngredients.splice(action.payload.index, 1);
        return {
            ...state,
            ingredients: oldIngredients
        };
        default: return state;
    }
}
