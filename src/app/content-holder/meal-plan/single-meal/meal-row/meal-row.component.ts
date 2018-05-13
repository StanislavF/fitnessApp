import { Food } from './../../../../shared/models/food.model';
import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../../../shared/services/utils-service.service';
import { Router } from '@angular/router';
import { MealHttpService } from '../../../../shared/services/http-services/meal-http.service';
import { FoodRow } from '../../../../shared/models/food-row.model';

@Component({
  selector: 'app-meal-row',
  templateUrl: './meal-row.component.html',
  styleUrls: ['./meal-row.component.css']
})
export class MealRowComponent implements OnInit {

  @Input() foodRow: FoodRow;
  public isMyClientsClicked;
  

  constructor(
    private utilsService: UtilsService,
    private router: Router,
    private mealHttpService: MealHttpService
  ) {
    this.isMyClientsClicked = this.utilsService.isMyClientsClicked(this.router.url);
   }

  ngOnInit() {
  }

  createComment() {
    let clientUsername = localStorage.getItem("username");
    let comment = this.foodRow.comment;
    let foodRowId = this.foodRow.id;

    this.mealHttpService.createComment(comment, foodRowId, clientUsername).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
