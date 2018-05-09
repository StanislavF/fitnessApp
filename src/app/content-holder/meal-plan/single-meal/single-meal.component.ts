import { UtilsService } from './../../../shared/services/utils-service.service';
import { MealPlanModalService } from './../meal-plan-modal.service';
import { Router } from '@angular/router';
import { ModalSingleMealComponent } from './../modal-single-meal/modal-single-meal.component';
import { Food } from './../../../shared/models/food.model';
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
  public isTrainer: boolean;

  constructor(
    private router: Router ,
    private modalService: MealPlanModalService
  ) { 
    this.isTrainer=localStorage.getItem("isTrainer") == "true";
  }

  ngOnInit() {
    let url = this.router.url;



  }

  openModal(){
    this.modalService.openModal(this.singleMeal);
  }


}
