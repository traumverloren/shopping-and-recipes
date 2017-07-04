import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tasty recipe', 'Yummy things go in here', 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Rainbow_Rice_and_Beans.jpg'),
    new Recipe('Another recipe', 'More things go in here', 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Rainbow_Rice_and_Beans.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
