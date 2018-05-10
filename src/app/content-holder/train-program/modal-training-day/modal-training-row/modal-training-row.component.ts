import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../../../shared/models/exercise.model';
import { ExerciseRow } from '../../../../shared/models/exercise-row.model';

@Component({
  selector: 'app-modal-training-row',
  templateUrl: './modal-training-row.component.html',
  styleUrls: ['./modal-training-row.component.css']
})
export class ModalTrainingRowComponent implements OnInit {


  @Input() exerciseRows:ExerciseRow[];
  @Input() index;
  @Output() exerciesChange: EventEmitter<any>;

  constructor() { 
    this.exerciesChange = new EventEmitter();
  }

  ngOnInit() {
  }

  deleteExerciseRow(){
    this.exerciseRows.splice(this.index,1);
    this.exerciesChange.emit(this.exerciseRows);
  }

}
