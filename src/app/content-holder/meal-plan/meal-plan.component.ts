import { MealHttpService } from './../../shared/services/http-services/meal-http.service';
import { UserHttpService } from './../../shared/services/http-services/user-http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UtilsService } from './../../shared/services/utils-service.service';
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
  public date: string;
  public isMyClientsclicked: boolean;
  private username: string;
  private datePipe: DatePipe;

  constructor(
    private modalService: MealPlanModalService,
    private utilsService: UtilsService,
    private mealHttpService: MealHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.datePipe = new DatePipe("en-US");
    this.isMyClientsclicked = this.utilsService.isMyClientsClicked(this.router.url);
    this.date = this.datePipe.transform(new Date(), "yyyy-ww");
  }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (data: ParamMap) => {
        this.username = data.get('username');
        if(this.isMyClientsclicked){
          this.getSingleMeals(this.date, this.username, localStorage.getItem("username"));
        } else {
          this.getSingleMeals(this.date, localStorage.getItem("username"), this.username);
        }
      }
    );
  }

  openModal() {
    this.modalService.openModal(null, this.username, this.date);
  }

  onDateChange(date: string) {
    this.date = date;

    if(this.isMyClientsclicked){
      this.getSingleMeals(this.date, this.username, localStorage.getItem("username"));
    } else {
      this.getSingleMeals(this.date, localStorage.getItem("username"), this.username);
    }
  }

  getSingleMeals(date: string, clientUsername: string, trainerUsername: string){
    this.mealHttpService.getSingleMeals(date, clientUsername, trainerUsername).subscribe(
      (data: SingleMeal[]) => {
        this.singleMeals = data;
      }
    );  
  }


}
