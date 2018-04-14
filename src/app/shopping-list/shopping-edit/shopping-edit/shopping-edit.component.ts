import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredien } from '../../../Shared/ingredient.model';
import { ShoppingService } from '../../../Shared/shoppingList.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputNameref: ElementRef;
  @ViewChild('inputAmount') inputAmountref: ElementRef;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  onPush() {
    const nameIngredien = this.inputNameref.nativeElement.value;
    const amountIngredien = this.inputAmountref.nativeElement.value;
    const ingredien = new Ingredien(nameIngredien, amountIngredien);
    this.shoppingService.newIngredient.emit(ingredien);
    this.shoppingService.addNewIngredien(nameIngredien, amountIngredien);


  }
}
