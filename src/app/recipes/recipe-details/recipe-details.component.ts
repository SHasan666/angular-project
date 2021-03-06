import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Subscription } from 'rxjs';
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
  id:number;
  paramSubscription: Subscription;
  private _success = new Subject<string>();
  successMessage = '';
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(private recipeService:RecipeService,
              private shoppingListService: ShoppingListService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.params['id'];

    if(!isNaN(this.id)){
      this.selectRecipe = this.recipeService.getRecipeById(this.id);
    }else{
      this.router.navigate(['/recipes']); 
    }
    
    this.paramSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.id  = +params['id'];
        this.selectRecipe = this.recipeService.getRecipeById(this.id);
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

  editRecipe(){
    this.router.navigate(["edit"] , {relativeTo:this.route});   
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }


}
