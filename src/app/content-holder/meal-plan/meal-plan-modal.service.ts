import { ActionEnum } from './../../shared/models/enums/actionEnum.enum';
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

  openModal(singleMeal: SingleMeal, clientUsername: string, dateFromDatepicker: string) {
    this.bsModalRef = this.modalService.show(ModalSingleMealComponent, { 
      class: 'modal-lg', 
      backdrop: "static" , 
      initialState: {
        singleMeal: singleMeal
      }
    });
  }

}
