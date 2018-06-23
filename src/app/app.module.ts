import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './Shared/dropDown.directive';
import { ShoppingService } from './Shared/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { RecipeService } from './Shared/recipeService';
import { RecipesModule } from './recipes/recipes.module';
import { RecipesRouter } from './recipes/recipesRoutes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesRouter,
    RecipesModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ShoppingService, RecipeService, AuthService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
