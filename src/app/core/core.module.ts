import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { share } from 'rxjs/operators';
import { ShareModule } from '../Shared/share.module';

import { RecipeService } from '../Shared/recipeService';
import { AuthService } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../Shared/auth.interceptor';

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
    providers: [RecipeService, AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class CoreModule {
}
