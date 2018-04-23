import { ActionEnum } from './../../../shared/models/enums/actionEnum.enum';
import { SingleMeal } from './../../../shared/models/single-meal.model';
import { element } from 'protractor';
import { Food } from './../../../shared/models/food.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component, OnInit, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-modal-single-meal',
  templateUrl: './modal-single-meal.component.html',
  styleUrls: ['./modal-single-meal.component.scss']
})
export class ModalSingleMealComponent implements OnInit {

  public singleMeal: SingleMeal;

  public singleMealCopy: SingleMeal;
  public foods: Food[];

  action: ActionEnum;

  constructor(
    public bsModalRef: BsModalRef
  ) {
    this.singleMealCopy = new SingleMeal();
    this.foods = new Array();
  }

  ngOnInit() {
    if (this.singleMeal != undefined) {
      Object.assign(this.foods, this.singleMeal.foods);
      Object.assign(this.singleMealCopy, this.singleMeal);
    }
  }

  addFoodRow(food: Food) {
    this.foods.push(food);
  }

  addNewFoodRow() {
    this.addFoodRow(new Food());
  }

  calculateDailyMacros() {

    this.singleMealCopy.smCalories = 0;
    this.singleMealCopy.smProteins = 0;
    this.singleMealCopy.smCarbs = 0;
    this.singleMealCopy.smFats = 0;

    this.foods.forEach(element => {
      this.singleMealCopy.smCalories += Number(element.calories);
      this.singleMealCopy.smProteins += Number(element.proteins);
      this.singleMealCopy.smCarbs += Number(element.carbs);
      this.singleMealCopy.smFats += Number(element.fats);

    });
  }

  saveSingleMeal(){
    this.singleMealCopy.foods=this.foods;
    this.action;
  }

  hideModal() {
    this.bsModalRef.hide();
  }



}
