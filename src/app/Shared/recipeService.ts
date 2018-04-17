import { OnInit, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredien } from './ingredient.model';
import { ShoppingService } from './shoppingList.service';

@Injectable()
export class RecipeService implements OnInit {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
  new Recipe(
  'Hamburger',
  'Meet',
  'https://fthmb.tqn.com/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:' +
  'fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg',
  [
  new Ingredien('meet', 1),
  new Ingredien('bruns', 2)
  ] ),

  new Recipe(
  'Sushi',
  'Japanise',
  'https://media-cdn.tripadvisor.com/media/photo-s/05/b4/63/34/shushi.jpg',
  [
  new Ingredien('fish', 2),
  new Ingredien('rise', 40)
  ])
  ];
      
  constructor(private shoppingService: ShoppingService) {}
  
  ngOnInit() {
  }

  getRecipes() {
   return this.recipes.slice();
  }

  addIngridientToShoppList(ingredients: Ingredien[]) {
    this.shoppingService.addNewIngrediens(ingredients);
   }

}
