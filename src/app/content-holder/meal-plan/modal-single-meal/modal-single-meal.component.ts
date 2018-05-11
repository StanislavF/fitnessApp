import { MealHttpService } from './../../../shared/services/http-services/meal-http.service';
import { Food } from './../../../shared/models/food.model';
import { ActionEnum } from './../../../shared/models/enums/actionEnum.enum';
import { SingleMeal } from './../../../shared/models/single-meal.model';
import { element } from 'protractor';
import { FoodRow } from './../../../shared/models/food-row.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component, OnInit, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-modal-single-meal',
  templateUrl: './modal-single-meal.component.html',
  styleUrls: ['./modal-single-meal.component.css']
})
export class ModalSingleMealComponent implements OnInit {

  public singleMeal: SingleMeal;
  private clientUsername: string;
  private dateFromDatepicker: string;

  private trainerUsername: string;

  public singleMealCopy: SingleMeal;
  public foodRows: FoodRow[];

  action: ActionEnum;

  constructor(
    public bsModalRef: BsModalRef,
    private mealHttpService: MealHttpService
  ) {
    this.singleMealCopy = new SingleMeal();
    this.foodRows = new Array();
    this.trainerUsername = localStorage.getItem("username");
  }

  ngOnInit() {
    if (this.singleMeal != undefined) {
      Object.assign(this.foodRows, this.singleMeal.foodRows);
      Object.assign(this.singleMealCopy, this.singleMeal);
    }
  }

  addFoodRow(foodRow: FoodRow) {
    this.foodRows.push(foodRow);
  }

  addNewFoodRow() {
    let foodRow = new FoodRow();
    foodRow.food = new Food();
    this.addFoodRow(foodRow);
  }

  calculateDailyMacros() {

    this.singleMealCopy.calories = 0;
    this.singleMealCopy.proteins = 0;
    this.singleMealCopy.carbs = 0;
    this.singleMealCopy.fats = 0;

    this.foodRows.forEach(element => {
      this.singleMealCopy.calories += Number(element.calories);
      this.singleMealCopy.proteins += Number(element.proteins);
      this.singleMealCopy.carbs += Number(element.carbs);
      this.singleMealCopy.fats += Number(element.fats);

    });
  }

  saveSingleMeal(){
    this.singleMealCopy.foodRows=this.foodRows;
    this.singleMealCopy.date = this.dateFromDatepicker;

    if (this.singleMeal.id == null || this.singleMeal.id == undefined) {
      this.mealHttpService.createSingleMeal(this.singleMealCopy, this.clientUsername, this.trainerUsername).subscribe(
        data => {
          this.hideModal();
        }
      );
    } else {
      this.mealHttpService.updateSingleMeal(this.singleMealCopy, this.singleMealCopy.id, this.clientUsername, this.trainerUsername).subscribe(
        data => {
          this.hideModal();
        }
      );
    }

  }

  hideModal() {
    this.bsModalRef.hide();
  }



}
