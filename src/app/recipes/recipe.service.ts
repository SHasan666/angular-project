import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Detox Moroccan-Spiced Chickpea Glow Bowl' , 
               'Sweats, thick socks, and a big glow bowl loaded with Moroccan-spiced chickpeas' , 
               'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg',
               [
                  new Ingredient('Chickpeas',20),
                  new Ingredient('Sweats',3)
               ]),
     new Recipe('Spicy Shrimp Tacos with Garlic Cilantro Lime Slaw' , 
                'Spice-loaded shrimp tucked in between smashed avocado and a cabbage slaw that is heavy with a homemade creamy lime sauce' , 
                'https://pinchofyum.com/wp-content/uploads/Shrimp-Tacos-with-Slaw.jpg',
                [
                  new Ingredient('Shrimp',30),
                  new Ingredient('Avocado',2),
                  new Ingredient('Cabbage',6),
                  new Ingredient('Lime Sauce',1)
                ]),
     new Recipe('The Best Protein Pancakes' , 
                'With peanut butter and chocolate chips and a little bit of maple syrup' , 
                'https://pinchofyum.com/wp-content/uploads/Protein-Pancakes-1-4.jpg',
                [
                  new Ingredient('Peanut Butter',2),
                  new Ingredient('Chocolate Chips',13),
                  new Ingredient('Maple Syrup',1)
                ])
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  getAllRecipes():Recipe[]{
    return [...this.recipes];
  }

  getRecipeById(id : number):Recipe{
    return [...this.recipes][id];
  }
}
