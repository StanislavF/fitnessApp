import { Component, OnInit } from '@angular/core';
import { TrainingDay } from '../../../shared/models/training-day.model';
import { ExerciseRow } from '../../../shared/models/exercise-row.model';
import { BsModalRef } from 'ngx-bootstrap';
import { TrainingHttpService } from '../../../shared/services/http-services/training-http.service';
import { Exercise } from '../../../shared/models/exercise.model';

@Component({
  selector: 'app-modal-training-day',
  templateUrl: './modal-training-day.component.html',
  styleUrls: ['./modal-training-day.component.css']
})
export class ModalTrainingDayComponent implements OnInit {

  public trainingDay: TrainingDay;
  private clientUsername: string;
  private dateFromDatepicker: string;

  private trainerUsername: string;

  public trainingDayCopy: TrainingDay;
  public exercises: ExerciseRow[];

  constructor(
    public bsModalRef: BsModalRef,
    private trainingHttpService: TrainingHttpService
  ) {
    this.trainingDayCopy = new TrainingDay();
    this.exercises = new Array();
    this.trainerUsername = localStorage.getItem("username");
   }

  ngOnInit() {
    if (this.trainingDay != undefined) {
      Object.assign(this.trainingDayCopy, this.trainingDay);
      Object.assign(this.exercises, this.trainingDay.exerciseRows);
    }
  }

  addExerciseRow(exercise: ExerciseRow) {
    this.exercises.push(exercise);
  }

  addNewExerciseRow() {
    let exerciseRow = new ExerciseRow();
    exerciseRow.exercise = new Exercise();
    this.addExerciseRow(exerciseRow);
  }

  saveTrainingDay(){
    this.trainingDayCopy.exerciseRows = this.exercises;
    this.trainingDayCopy.date = this.dateFromDatepicker;

    this.trainingHttpService.createTrainingDay(this.trainingDayCopy, this.clientUsername, this.trainerUsername).subscribe(
      data => {
        this.hideModal();
      }
    );
  }

  hideModal() {
    this.bsModalRef.hide();
  }

}
