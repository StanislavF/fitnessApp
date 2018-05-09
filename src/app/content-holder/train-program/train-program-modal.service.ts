import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TrainingDay } from '../../shared/models/training-day.model';
import { ModalTrainingDayComponent } from './modal-training-day/modal-training-day.component';

@Injectable()
export class TrainProgramModalService {

  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }


  openModal(trainingDay: TrainingDay, clientUsername: string, dateFromDatepicker: string) {
    this.bsModalRef = this.modalService.show(ModalTrainingDayComponent, { 
      class: 'modal-lg', 
      backdrop: "static" , 
      initialState: {
        trainingDay: trainingDay,
        clientUsername: clientUsername,
        dateFromDatepicker
      }
    });
  }

}
