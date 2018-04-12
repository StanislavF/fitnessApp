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

  openModal() {
    this.bsModalRef = this.modalService.show(ModalSingleMealComponent,Object.assign({}, { class: 'modal-lg', backdrop: "static" }));
    //this.bsModalRef.content.closeBtnName = 'Close';
  }

}
