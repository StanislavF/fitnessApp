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

  public singleMealCopy: SingleMeal;
  public foodRows: FoodRow[];

  action: ActionEnum;

  constructor(
    public bsModalRef: BsModalRef
  ) {
    this.singleMealCopy = new SingleMeal();
    this.foodRows = new Array();
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
    this.addFoodRow(new FoodRow());
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
    this.action;
  }

  hideModal() {
    this.bsModalRef.hide();
  }



}
