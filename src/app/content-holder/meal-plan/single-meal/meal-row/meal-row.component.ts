import { Food } from './../../../../shared/models/food.model';
import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../../../shared/services/utils-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-row',
  templateUrl: './meal-row.component.html',
  styleUrls: ['./meal-row.component.css']
})
export class MealRowComponent implements OnInit {

  @Input() food: Food;
  public isMyClientsClicked;
  

  constructor(
    private utilsService: UtilsService,
    private router: Router
  ) {
    this.isMyClientsClicked = this.utilsService.isMyClientsClicked(this.router.url);
   }

  ngOnInit() {
  }

}
