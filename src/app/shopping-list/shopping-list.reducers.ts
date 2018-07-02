import * as ShoppingListAction from './shopping-list.action';
import { Ingredien } from '../Shared/ingredient.model';


const initialState = {
    ingredients: [
    new Ingredien('apples', 6),
    new Ingredien('Tomatos', 10),
    ]
};
export function shoppingListReducers(state = initialState, action: ShoppingListAction.ShoppingListAction) {
    switch (action.type) {
        case ShoppingListAction.ADD_IGREDIEN:  return{
            ...state,
            ingredients: [...state.ingredients, action.payload]
        };
        default:  return state;
    }
}
