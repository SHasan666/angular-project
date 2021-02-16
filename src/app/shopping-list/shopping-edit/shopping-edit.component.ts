import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientInput' , {static : true}) ingredientInputElement:ElementRef;
  @ViewChild('amountInput' , {static : true}) amountInputElement:ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    const addedName:string = this.ingredientInputElement.nativeElement.value.trim();
    const addedAmount:number = Number(this.amountInputElement.nativeElement.value.trim());

    if(addedName !== ''){
      
      const addedIngredient:Ingredient = new Ingredient(addedName , addedAmount);

      this.addedIngredient.emit(addedIngredient);
    }

    this.ingredientInputElement.nativeElement.value = '';
    this.amountInputElement.nativeElement.value = '';
  }
}
