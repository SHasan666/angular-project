import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  selectRecipe: Recipe;
  private _success = new Subject<string>();
  successMessage = '';
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(private recipeService:RecipeService,
              private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipe : Recipe) => {
        this.selectRecipe = recipe;
      }
    );

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  addToShoppingList(){
    // for(const ingredient of this.selectRecipe.ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
    //const rcp = {...this.selectRecipe};
    this.shoppingListService.addIngredients(this.selectRecipe.ingredients);
    this._success.next("Successfully added to shopping list");
  }

}
