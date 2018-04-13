import { Food } from './../../../../shared/models/food.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-single-meal-row',
  templateUrl: './modal-single-meal-row.component.html',
  styleUrls: ['./modal-single-meal-row.component.css']
})
export class ModalSingleMealRowComponent implements OnInit {

  @Input() foods:Food[];
  @Input() index;
  @Output() foodsChange: EventEmitter<any>;

  constructor() { 
    this.foodsChange = new EventEmitter();
  }

  ngOnInit() {
  }

  deleteFoodRow(){
    this.foods.splice(this.index,1);
    this.foodsChange.emit(this.foods)
  }

}
