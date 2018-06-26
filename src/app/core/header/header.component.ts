
import { Component} from '@angular/core';
import { RecipeService } from '../../Shared/recipeService';
import { Http } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class HeaderComponent {
  constructor(private srvRecipe: RecipeService, private srvAuth: AuthService, private router: Router) {}

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




