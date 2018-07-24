import * as ShoppingListAction from './shopping-list.action';
import { Ingredien } from '../Shared/ingredient.model';

export interface State {
 ingredients: Ingredien[];
 editedIngredient: Ingredien;
 editedIngredientIndex: number;
}
const initialState: State = {
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
            const ingredient = state[state.editedIngredientIndex];
            const updateIngredient = {
                ...ingredient,
                ...action.payload.ingredient,
                editedIngredient: null,
               editedIngredientIndex: -1
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updateIngredient;
            return {
                ...state,
                ingredients: ingredients
            };
        case ShoppingListAction.DELETE_IGREDIEN:
        const oldIngredients = [...state.ingredients];
        oldIngredients.splice(state.editedIngredientIndex, 1);
        return {
            ...state,
            ingredients: oldIngredients
        };
        case ShoppingListAction.START_EDIT:
        const editedIngredient = {...state.ingredients[action.payload.index]};
        return {
             ...state,
             editedIngredient: editedIngredient,
             editedIngredientIndex: action.payload.index

        };
        case ShoppingListAction.STOPED_EDIT:
        return {
             ...state,
             editedIngredient: null,
             editedIngredientIndex: -1

        };
        default: return state;
    }
}
