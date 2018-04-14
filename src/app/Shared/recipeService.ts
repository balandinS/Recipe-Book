import { Recipe } from '../recipes/recipe.model';
import { OnInit, EventEmitter } from '@angular/core';

export class RecipeService implements OnInit {
    recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
        new Recipe( 'Hamburger', 'Meet', 'https://fthmb.tqn.com/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:' +
        'fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg'),
        new Recipe( 'Sushi', 'Japanise',  'https://media-cdn.tripadvisor.com/media/photo-s/05/b4/63/34/shushi.jpg')
      ];

      ngOnInit() {

      }

      getRecipes() {
        return this.recipes.slice();
      }

}
