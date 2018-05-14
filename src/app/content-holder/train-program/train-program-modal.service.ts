import { Injectable, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TrainingDay } from '../../shared/models/training-day.model';
import { ModalTrainingDayComponent } from './modal-training-day/modal-training-day.component';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class TrainProgramModalService {

  bsModalRef: BsModalRef;

  public onSave: Subject<TrainingDay>;

  constructor(
    private modalService: BsModalService
  ) { 
    this.onSave = new Subject();
  }


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
    this.bsModalRef.content.onSave.subscribe(
      result => {
        console.log(result);
        this.onSave.next(result);
      }
    );
  }

}
