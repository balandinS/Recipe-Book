import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
   new Recipe( 'Hamburger', 'Meet', 'https://fthmb.tqn.com/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:' +
   'fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg'),
   new Recipe( 'Sushi', 'Japanise',  'https://media-cdn.tripadvisor.com/media/photo-s/05/b4/63/34/shushi.jpg')
 ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(itemRecipe: Recipe) {
    this.recipeWasSelected.emit(itemRecipe);
  }
}
