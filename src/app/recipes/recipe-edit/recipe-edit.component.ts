import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );

  }

}
