import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Shared/recipeService';
import { Router, ActivatedRoute } from '@angular/router';
import { relative } from 'path';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }

  onEditRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
