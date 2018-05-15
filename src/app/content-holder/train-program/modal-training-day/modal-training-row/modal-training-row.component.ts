import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../../../shared/models/exercise.model';
import { ExerciseRow } from '../../../../shared/models/exercise-row.model';
import { TrainingHttpService } from '../../../../shared/services/http-services/training-http.service';

@Component({
  selector: 'app-modal-training-row',
  templateUrl: './modal-training-row.component.html',
  styleUrls: ['./modal-training-row.component.css']
})
export class ModalTrainingRowComponent implements OnInit {


  @Input() exerciseRows:ExerciseRow[];
  @Input() index;
  @Output() exerciesChange: EventEmitter<any>;

  public exercises: Exercise[];

  constructor(
    private trainingHttpService: TrainingHttpService
  ) { 
    this.exerciesChange = new EventEmitter();
  }

  ngOnInit() {
    this.trainingHttpService.getAllExercises().subscribe( (result: Exercise[]) => {
      this.exercises = result;
    });
  }

  deleteExerciseRow(){
    this.exerciseRows.splice(this.index,1);
    this.exerciesChange.emit(this.exerciseRows);
  }
  
}
