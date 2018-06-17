import { OnInit, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredien } from './ingredient.model';
import { ShoppingService } from './shoppingList.service';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

@Injectable()
export class RecipeService implements OnInit {

  recipeChanges = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
  new Recipe(
  'Hamburger',
  'Meat',
  'https://fthmb.tqn.com/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:' +
  'fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg',
  [
  new Ingredien('meat', 1),
  new Ingredien('buns', 2)
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

  constructor(private shoppingService: ShoppingService, private http: Http) {}

  ngOnInit() {
  }

  saveData() {
   return this.http.put('https://ng-recipe-book-1d243.firebaseio.com/data.json', this.recipes);
  }
  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }

  getRecipes() {
   return this.recipes.slice();
  }

  getRecipe(index: number) {
    const recipe =  this.recipes[index];
     return recipe;
  }

  addIngridientToShoppList(ingredients: Ingredien[]) {
    this.shoppingService.addNewIngrediens(ingredients);
   }

   deleteRecipe(index: number) {
     this.recipes.splice(index, 1);
     this.recipeChanges.next(this.recipes.slice());
   }



}
