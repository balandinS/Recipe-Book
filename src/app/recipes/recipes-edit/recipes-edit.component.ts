import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../Shared/recipeService';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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

  private initForm() {
    let name = '';
    let img = '';
    let description = '';
    let recipeIngrediend= new FormArray([]);

    if (this.editMode) {
       const recipe = this.srvRecipe.getRecipe(this.id);
       name = recipe.name;
       img = recipe.imagePath;
       description = recipe.description;
       if (recipe['ingredeints']) {
         for (let ingredeint of recipe.ingredeints ) {
            recipeIngrediend.push(
              new FormGroup({
                'name': new FormControl(ingredeint.name),
                'amount': new FormControl(ingredeint)
              })
            );
         }
       }
    }

    this.recipeForm = new FormGroup({
        'name': new FormControl(name),
        'imagePath': new FormControl(img),
        'description': new FormControl(description),
        'ingredeints': recipeIngrediend
    });
  }
}
