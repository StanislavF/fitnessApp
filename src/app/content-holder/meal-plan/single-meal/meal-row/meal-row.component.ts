import { Food } from './../../../../shared/models/food.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meal-row',
  templateUrl: './meal-row.component.html',
  styleUrls: ['./meal-row.component.scss']
})
export class MealRowComponent implements OnInit {

  @Input() food: Food;
  

  constructor() { }

  ngOnInit() {
  }

}
