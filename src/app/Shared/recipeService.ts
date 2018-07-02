import { OnInit, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredien } from './ingredient.model';
import { ShoppingService } from './shoppingList.service';
import { Subject } from 'rxjs/Subject';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { auth } from 'firebase';


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
      ]),

    new Recipe(
      'Sushi',
      'Japanise',
      'https://media-cdn.tripadvisor.com/media/photo-s/05/b4/63/34/shushi.jpg',
      [
        new Ingredien('fish', 2),
        new Ingredien('rise', 40)
      ])
  ];

  constructor(private shoppingService: ShoppingService, private authService: AuthService , private httpClient: HttpClient) { }

  ngOnInit() {
  }

  saveData() {
    const token = this.authService.getToken();
    const url = 'https://ng-recipe-book-1d243.firebaseio.com/data.json';
   const req = new HttpRequest('PUT', url, this.recipes, {reportProgress: true, params: new HttpParams().set('auth', token)});
   return this.httpClient.request(req);
  }

  getData() {
    const token = this.authService.getToken();
    const url = 'https://ng-recipe-book-1d243.firebaseio.com/data.json';
    return this.httpClient.get<Recipe[]>(url, {
      observe: 'body',
      responseType: 'json',
      params: new HttpParams().set('auth', token)
    })
      .map(
        (recipes) => {
          // tslint:disable-next-line:prefer-const
          for (let recipe of recipes) {
            if (!recipe['ingredien']) {
              recipe['ingredien'] = [];
            }
          }
          console.log(recipes);
          return recipes;
        })
      .subscribe(
        (recipes: Recipe[]) => this.setRecipes(recipes)
      );
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanges.next(this.recipes.slice());
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
    const recipe = this.recipes[index];
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
