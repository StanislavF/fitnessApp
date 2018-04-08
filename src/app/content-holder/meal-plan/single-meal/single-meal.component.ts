import { Food } from './../../../shared/models/food.model';
import { Component, OnInit, Input } from '@angular/core';
import { SingleMeal } from '../../../shared/models/single-meal.model';

@Component({
  selector: 'app-single-meal',
  templateUrl: './single-meal.component.html',
  styleUrls: ['./single-meal.component.css']
})
export class SingleMealComponent implements OnInit {

  @Input() singleMeal: SingleMeal;

  constructor() { }

  ngOnInit() {

   

  }

}
