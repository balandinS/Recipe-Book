import { Component, OnInit} from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../Shared/recipeService';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  seleckedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.seleckedRecipe = recipe;
      }
    );
  }

}
