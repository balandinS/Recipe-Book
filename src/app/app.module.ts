import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit/shopping-edit.component';
import { ShoppingService } from './Shared/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { RecipeService } from './Shared/recipeService';
import { RecipesRouter } from './recipes/recipesRoutes.module';
import { ShareService } from './Shared/sharedropdown.service';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/authGuard.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingModule,
    HttpModule,
    ShareService,
    AuthModule
  ],
  providers: [ ShoppingService, RecipeService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
