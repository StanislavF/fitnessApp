import { FoodRow } from './../../../../shared/models/food-row.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MealHttpService } from '../../../../shared/services/http-services/meal-http.service';
import { Food } from '../../../../shared/models/food.model';

@Component({
  selector: 'app-modal-single-meal-row',
  templateUrl: './modal-single-meal-row.component.html',
  styleUrls: ['./modal-single-meal-row.component.css']
})
export class ModalSingleMealRowComponent implements OnInit {

  @Input() foodRows:FoodRow[];
  @Input() index;
  @Output() foodRowsChange: EventEmitter<any>;

  public foods: Food[];

  constructor(
    private mealHttpService: MealHttpService
  ) { 
    this.foodRowsChange = new EventEmitter();
  }

  ngOnInit() {
    this.mealHttpService.getAllFoods().subscribe(
      (result: Food[]) => {
        this.foods = result;
      }
    );
  }

  deleteFoodRow(){
    this.foodRows.splice(this.index,1);
    this.foodRowsChange.emit(this.foodRows)
  }

}
