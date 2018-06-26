import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDeteilComponent } from './recipe-deteil/recipe-deteil.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesRouter } from './recipesRoutes.module';
import { ShareModule } from '../Shared/share.module';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDeteilComponent,
        RecipeItemComponent,
        RecipesStartComponent,
        RecipesEditComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRouter,
        ShareModule,
    ],
}
)
export class RecipesModule { }
