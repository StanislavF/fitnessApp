import { Food } from './../../../shared/models/food.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-meal',
  templateUrl: './single-meal.component.html',
  styleUrls: ['./single-meal.component.css']
})
export class SingleMealComponent implements OnInit {

  public foods: Food[];

  constructor() { }

  ngOnInit() {

    this.foods = [
      {
        foodNo: "1",
        foodName: "2",
        foodWeight: "3",
        calories: 20,
        proteins: 20,
        carbs: 12,
        fats: 12,
        comment: "test"
      },
      {
        foodNo: "1",
        foodName: "2",
        foodWeight: "3",
        calories: 20,
        proteins: 20,
        carbs: 12,
        fats: 12,
        comment: "test"
      },
      {
        foodNo: "1",
        foodName: "2",
        foodWeight: "3",
        calories: 20,
        proteins: 20,
        carbs: 12,
        fats: 12,
        comment: "test"
      },
      {
        foodNo: "1",
        foodName: "2",
        foodWeight: "3",
        calories: 20,
        proteins: 20,
        carbs: 12,
        fats: 12,
        comment: "test"
      }
    ];

  }

}
