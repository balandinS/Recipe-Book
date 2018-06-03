import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Shared/recipeService';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-deteil',
  templateUrl: './recipe-deteil.component.html',
  styleUrls: ['./recipe-deteil.component.css']
})
export class RecipeDeteilComponent implements OnInit {
  id: number;
  recipe: Recipe;
  isChange = false;

 constructor(
  private recipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute
) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
       this.id = +params['id'];
       this.recipe = this.recipeService.getRecipe(this.id);
     }
   );
  }

  addtoSoppintList() {
    this.recipeService.addIngridientToShoppList(this.recipe.ingredeints);
  }
  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDelete() {
   console.log(' asd ');
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'], { relativeTo: this.route });
  }
}
