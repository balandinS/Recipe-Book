import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouteConfigLoadStart, Router } from '@angular/router';
import { RecipeService } from '../../Shared/recipeService';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private srvRecipe: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        console.log(this.editMode);
      });
  }

  onAddNewIngredient() {
    (<FormArray>this.recipeForm.get('ingredeints')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)] )
      })
    );
  }

  onSubmit() {
   if (this.editMode) {
     this.srvRecipe.updateRecipe(this.id, this.recipeForm.value);
   } else {
     this.srvRecipe.addRecipe(this.recipeForm.value);
   }
  }

  private initForm() {
    let name = '';
    let img = '';
    let description = '';
    const recipeIngrediend = new FormArray([]);

    if (this.editMode) {
      const recipe = this.srvRecipe.getRecipe(this.id);
      name = recipe.name;
      img = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingredeints']) {
        for (const ingredeint of recipe.ingredeints) {
          recipeIngrediend.push(
            new FormGroup({
              'name': new FormControl(ingredeint.name, Validators.required),
              'amount': new FormControl(ingredeint.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(img, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredeints': recipeIngrediend
    });
  }

  onCencel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.srvRecipe.deleteIngridient(this.id);
  }
}
