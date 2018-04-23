import { Component, OnInit } from '@angular/core';
import { TrainingDay } from '../../../shared/models/training-day.model';
import { Exercise } from '../../../shared/models/exercise.model';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-training-day',
  templateUrl: './modal-training-day.component.html',
  styleUrls: ['./modal-training-day.component.scss']
})
export class ModalTrainingDayComponent implements OnInit {

  public trainingDay: TrainingDay;

  public trainingDayCopy: TrainingDay;
  public exercises: Exercise[];

  constructor(
    public bsModalRef: BsModalRef
  ) {
    this.trainingDayCopy = new TrainingDay();
    this.exercises = new Array();
   }

  ngOnInit() {
    if (this.trainingDay != undefined) {
      Object.assign(this.trainingDayCopy, this.trainingDay);
      Object.assign(this.exercises, this.trainingDay.exercises);
    }
  }

  addExerciseRow(exercise: Exercise) {
    this.exercises.push(exercise);
  }

  addNewExerciseRow() {
    this.addExerciseRow(new Exercise());
  }

  saveTrainingDay(){
   
  }

  hideModal() {
    this.bsModalRef.hide();
  }

}
