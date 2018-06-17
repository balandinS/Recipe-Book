
import { Component} from '@angular/core';
import { RecipeService } from '../Shared/recipeService';
import { Http } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class HeaderComponent {
  constructor(private srvRecipe: RecipeService) {}

  onSaveData() {
    this.srvRecipe.saveData().subscribe(
      (response) => console.log(response),
       (error) => console.log(error)
    );
  }
 }
