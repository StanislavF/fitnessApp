import { MealHttpService } from './../../../shared/services/http-services/meal-http.service';
import { UtilsService } from './../../../shared/services/utils-service.service';
import { MealPlanModalService } from './../meal-plan-modal.service';
import { Router } from '@angular/router';
import { ModalSingleMealComponent } from './../modal-single-meal/modal-single-meal.component';
import { FoodRow } from './../../../shared/models/food-row.model';
import { Component, OnInit, Input} from '@angular/core';
import { SingleMeal } from '../../../shared/models/single-meal.model';


import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-single-meal',
  templateUrl: './single-meal.component.html',
  styleUrls: ['./single-meal.component.css']
})
export class SingleMealComponent implements OnInit {

  @Input() singleMeal: SingleMeal;  
  @Input() clickedUsername: string;
  @Input() dateFromDatepicker: string;


  public isMyClientsClicked: boolean;

  constructor(
    private router: Router ,
    private modalService: MealPlanModalService,
    private mealHttpService: MealHttpService,
    private utilsService: UtilsService
  ) { 
    this.isMyClientsClicked=this.utilsService.isMyClientsClicked(this.router.url);
  }

  ngOnInit() {
    let url = this.router.url;
  }

  openModal(){
    this.modalService.openModal(this.singleMeal, this.clickedUsername, this.dateFromDatepicker);
  }

  deleteSingleMeal(){

    let clientUsername = this.clickedUsername;
    let trainerUsername = localStorage.getItem("username");

    this.mealHttpService.deleteSingleMeal(this.singleMeal.id, clientUsername,  trainerUsername).subscribe(
      data => {
        console.log("deleted");
      }
    );
  }

}
