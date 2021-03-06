import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './Shared/share.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducers } from './shopping-list/shopping-list.reducers';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingModule,
    HttpClientModule,
    ShareModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducers})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
