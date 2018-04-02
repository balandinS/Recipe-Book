import { Component, OnInit, Output,  EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredien } from '../../../Shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() shoppingItem =  new EventEmitter<Ingredien>();
  @ViewChild('inputName') inputNameref: ElementRef;
  @ViewChild('inputAmount') inputAmountref: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onPush() {
    const nameIngredien = this.inputNameref.nativeElement.value;
    const amountIngredien = this.inputAmountref.nativeElement.value;
    const ingredien = new Ingredien(nameIngredien, amountIngredien);
    this.shoppingItem.emit(ingredien);

  }
}
