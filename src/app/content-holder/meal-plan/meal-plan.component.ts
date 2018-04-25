import { MealPlanModalService } from './meal-plan-modal.service';
import { Component, OnInit } from '@angular/core';
import { SingleMeal } from '../../shared/models/single-meal.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css']
})
export class MealPlanComponent implements OnInit {

  public singleMeals: SingleMeal[];
  public date: String;

  constructor(
    private modalService: MealPlanModalService
  ) {

  }

  ngOnInit() {

    this.singleMeals = [
      {
        smNo: 1,
        smTitle: "Meal 1",
        smCalories: 3000,
        smCarbs: 120,
        smFats: 302,
        smProteins: 102,
        foods: [
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
        ]
      }
    ];
  }

  openModal() {
    this.modalService.openModal(null);
  }

  onDateChange(date: String) {
    this.date = date;
  }


}
