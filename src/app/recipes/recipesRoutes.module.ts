import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipeDeteilComponent } from './recipe-deteil/recipe-deteil.component';
import { AuthGuard } from '../auth/authGuard.service';


const recipeRouter: Routes = [
    {path: '', component: RecipesComponent, children: [
     {path: '', component:  RecipesStartComponent},
     {path: 'new', component: RecipesEditComponent, canActivate: [AuthGuard]},
     {path: ':id', component: RecipeDeteilComponent},
     {path: ':id/edit', component:  RecipesEditComponent, canActivate: [AuthGuard]}
    ]}];
@NgModule({
    imports: [RouterModule.forChild(recipeRouter)],
    exports: [RouterModule]
})
export class RecipesRouter {}
