import { ExerciseRow } from './../../../../shared/models/exercise-row.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-training-row',
  templateUrl: './training-row.component.html',
  styleUrls: ['./training-row.component.css']
})
export class TrainingRowComponent implements OnInit {

  @Input() exerciseRow: ExerciseRow;

  constructor() { }

  ngOnInit() {
  }

}
