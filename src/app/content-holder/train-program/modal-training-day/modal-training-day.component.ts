import { Component, OnInit, EventEmitter } from '@angular/core';
import { TrainingDay } from '../../../shared/models/training-day.model';
import { ExerciseRow } from '../../../shared/models/exercise-row.model';
import { BsModalRef } from 'ngx-bootstrap';
import { TrainingHttpService } from '../../../shared/services/http-services/training-http.service';
import { Exercise } from '../../../shared/models/exercise.model';
import { Subject } from 'rxjs/Subject';

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
  public exerciseRows: ExerciseRow[];

  public onSave: Subject<TrainingDay>;

  constructor(
    public bsModalRef: BsModalRef,
    private trainingHttpService: TrainingHttpService
  ) {
    this.trainingDayCopy = new TrainingDay();
    this.exerciseRows = new Array();
    this.trainerUsername = localStorage.getItem("username");
    this.onSave = new Subject();
  }

  ngOnInit() {
    if (this.trainingDay != undefined) {
      Object.assign(this.trainingDayCopy, this.trainingDay);
      Object.assign(this.exerciseRows, this.trainingDay.exerciseRows);
    }
  }

  addExerciseRow(exerciseRow: ExerciseRow) {
    this.exerciseRows.push(exerciseRow);
  }

  addNewExerciseRow() {
    let exerciseRow = new ExerciseRow();
    exerciseRow.exercise = new Exercise();
    this.addExerciseRow(exerciseRow);
  }

  saveTrainingDay() {

    this.trainingDayCopy.exerciseRows = this.exerciseRows;
    this.trainingDayCopy.date = this.dateFromDatepicker;

    if (this.trainingDayCopy.id == null || this.trainingDayCopy.id == null) {
      this.trainingHttpService.createTrainingDay(this.trainingDayCopy, this.clientUsername, this.trainerUsername).subscribe(
        data => {
          this.hideModal();
        }
      );
    } else {
      this.trainingHttpService.updateTrainingDay(this.trainingDayCopy, this.trainingDayCopy.id, this.clientUsername, this.trainerUsername).subscribe(
        data => {
          this.hideModal();
        }
      );
    }
  }

  hideModal() {
    this.onSave.next(this.trainingDayCopy);
    this.bsModalRef.hide();
  }

}
