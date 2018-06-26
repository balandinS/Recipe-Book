import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { share } from 'rxjs/operators';
import { ShareModule } from '../Shared/share.module';
import { ShoppingService } from '../Shared/shoppingList.service';
import { RecipeService } from '../Shared/recipeService';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule,
        ShareModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
    ],
    providers: [ShoppingService, RecipeService, AuthService]
})
export class CoreModule {
}
