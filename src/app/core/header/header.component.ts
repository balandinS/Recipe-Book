
import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../../Shared/recipeService';
import { Http } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import * as fromApp from '../../store/app.redacers';
import * as fromAuth from '../../auth/storage/auth.redacers';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;
  constructor(
    private srvRecipe: RecipeService,
    private srvAuth: AuthService,
    private router: Router,
   private store: Store<fromApp.AppState> ) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.srvRecipe.saveData().subscribe(
      (response) => console.log(response),
       (error) => console.log(error)
    );
  }

  onGetData() {
    this.srvRecipe.getData();
  }
  onLogOut() {
    this.srvAuth.logOUt();
    this.router.navigate(['/signin']);
  }
 }




