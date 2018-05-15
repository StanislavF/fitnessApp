import { ActionEnum } from './../../shared/models/enums/actionEnum.enum';
import { SingleMeal } from './../../shared/models/single-meal.model';
import { ModalSingleMealComponent } from './modal-single-meal/modal-single-meal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MealPlanModalService {

  bsModalRef: BsModalRef;
  public onModalClose: Subject<SingleMeal>;

  constructor(
    private modalService: BsModalService
  ) { 
    this.onModalClose = new Subject();
  }

  openModal(singleMeal: SingleMeal, clientUsername: string, dateFromDatepicker: string) {
    this.bsModalRef = this.modalService.show(ModalSingleMealComponent, { 
      class: 'modal-lg', 
      backdrop: "static" , 
      initialState: {
        singleMeal: singleMeal,
        dateFromDatepicker: dateFromDatepicker,
        clientUsername: clientUsername
      }
    });

    this.bsModalRef.content.onClose.subscribe(
      (result: SingleMeal) => {
        console.log(result);
        this.onModalClose.next(result);
      }
    );
  }

}
