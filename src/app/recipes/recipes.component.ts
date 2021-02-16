import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipefromList:Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(event:Recipe){
    this.selectedRecipefromList = event;
  }

}
