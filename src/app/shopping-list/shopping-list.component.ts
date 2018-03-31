import { Component, OnInit } from '@angular/core';
import { Ingredien } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
   ingredients: Ingredien[] = [
       new Ingredien('apples', 6),
       new Ingredien('Tomatos', 10),
   ];
  constructor() { }

  ngOnInit() {
  }

}
