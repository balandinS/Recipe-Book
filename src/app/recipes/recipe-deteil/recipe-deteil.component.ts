import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-deteil',
  templateUrl: './recipe-deteil.component.html',
  styleUrls: ['./recipe-deteil.component.css']
})
export class RecipeDeteilComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
