import { ActionEnum } from './../../shared/models/actionEnum.enum';
import { SingleMeal } from './../../shared/models/single-meal.model';
import { ModalSingleMealComponent } from './modal-single-meal/modal-single-meal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

@Injectable()
export class MealPlanModalService {

  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  openModal(singleMeal: SingleMeal) {
    this.bsModalRef = this.modalService.show(ModalSingleMealComponent, { 
      class: 'modal-lg', 
      backdrop: "static" , 
      initialState: {
        singleMeal: singleMeal
      }
    });
    // if (singleMeal != null) {
    //   this.bsModalRef.content.action = ActionEnum.UPDATE;
    //   this.bsModalRef.content.singleMeal = singleMeal;
    //   this.bsModalRef.content.foods = singleMeal.foods;
    // } else {
    //   this.bsModalRef.content.action = ActionEnum.CREATE;
    // }
  }

}
