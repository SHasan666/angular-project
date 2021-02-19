import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple' , 5),
    new Ingredient('Orange' , 10)
  ];

  addedIngredient = new EventEmitter<Ingredient[]>();

  constructor() { }

  addIngredient(ingredient: Ingredient):void{

    this.addIfNeeded(ingredient);
    
    this.addedIngredient.emit([...this.ingredients]);
  }

  getAllIngredients():Ingredient[]{
    return [...this.ingredients];
  }

  addIngredients(ingredients: Ingredient[]){


    for(const ingredient of ingredients){

      this.addIfNeeded(new Ingredient(ingredient.name , ingredient.amount));
    }
    //this.ingredients.push(...ingredients);
    this.addedIngredient.emit([...this.ingredients]);
  }

  addIfNeeded(ingredient: Ingredient){
    const findIndexIfIngredientAlreadyExist:number = this.ingredients.findIndex(ing => ing.name === ingredient.name);

    if(findIndexIfIngredientAlreadyExist === -1){
      this.ingredients.push(ingredient);
    }else{

      const currentAmount:number = this.ingredients[findIndexIfIngredientAlreadyExist].amount;
      const addedAmount:number = ingredient.amount;
      const newAmount:number = currentAmount + addedAmount;
      this.ingredients[findIndexIfIngredientAlreadyExist].amount = newAmount;
    }
  }
}
