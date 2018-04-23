import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../../../shared/models/exercise.model';

@Component({
  selector: 'app-modal-training-row',
  templateUrl: './modal-training-row.component.html',
  styleUrls: ['./modal-training-row.component.scss']
})
export class ModalTrainingRowComponent implements OnInit {


  @Input() exercises:Exercise[];
  @Input() index;
  @Output() exerciesChange: EventEmitter<any>;

  constructor() { 
    this.exerciesChange = new EventEmitter();
  }

  ngOnInit() {
  }

  deleteExerciseRow(){
    this.exercises.splice(this.index,1);
    this.exerciesChange.emit(this.exercises);
  }

}
