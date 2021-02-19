import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientInput' , {static : true}) ingredientInputElement:ElementRef;
  @ViewChild('amountInput' , {static : true}) amountInputElement:ElementRef;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(){
    const addedName:string = this.ingredientInputElement.nativeElement.value.trim();
    const addedAmount:number = Number(this.amountInputElement.nativeElement.value.trim());

    if(addedName !== ''){
      
      const addedIngredient:Ingredient = new Ingredient(addedName , addedAmount);

      this.shoppingListService.addIngredient(addedIngredient);
    }

    this.ingredientInputElement.nativeElement.value = '';
    this.amountInputElement.nativeElement.value = '';
  }
}
