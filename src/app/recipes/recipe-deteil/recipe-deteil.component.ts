import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Shared/recipeService';

@Component({
  selector: 'app-recipe-deteil',
  templateUrl: './recipe-deteil.component.html',
  styleUrls: ['./recipe-deteil.component.css']
})
export class RecipeDeteilComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  addtoSoppintList() {
   this.recipeService.addIngridientToShoppList(this.recipe.ingredeints);
  }
}
