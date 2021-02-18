import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Detox Moroccan-Spiced Chickpea Glow Bowl' , 'Sweats, thick socks, and a big glow bowl loaded with Moroccan-spiced chickpeas' , 'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg'),
    new Recipe('Spicy Shrimp Tacos with Garlic Cilantro Lime Slaw' , 'Spice-loaded shrimp tucked in between smashed avocado and a cabbage slaw that is heavy with a homemade creamy lime sauce' , 'https://pinchofyum.com/wp-content/uploads/Shrimp-Tacos-with-Slaw.jpg'),
    new Recipe('The Best Protein Pancakes' , 'With peanut butter and chocolate chips and a little bit of maple syrup' , 'https://pinchofyum.com/wp-content/uploads/Protein-Pancakes-1-4.jpg')
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  getAllRecipes():Recipe[]{
    return [...this.recipes];
  }
}
