import { FoodRow } from './../../../../shared/models/food-row.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-single-meal-row',
  templateUrl: './modal-single-meal-row.component.html',
  styleUrls: ['./modal-single-meal-row.component.css']
})
export class ModalSingleMealRowComponent implements OnInit {

  @Input() foodRows:FoodRow[];
  @Input() index;
  @Output() foodRowsChange: EventEmitter<any>;

  constructor() { 
    this.foodRowsChange = new EventEmitter();
  }

  ngOnInit() {
  }

  deleteFoodRow(){
    this.foodRows.splice(this.index,1);
    this.foodRowsChange.emit(this.foodRows)
  }

}
