import { Exercise } from './../../../shared/models/exercise.model';
import { Component, OnInit, Input } from '@angular/core';
import { TrainingDay } from '../../../shared/models/training-day.model';

@Component({
  selector: 'app-training-day',
  templateUrl: './training-day.component.html',
  styleUrls: ['./training-day.component.css']
})
export class TrainingDayComponent implements OnInit {

  @Input() trainingDay: TrainingDay;

  constructor() { }

  ngOnInit() {

  }

}
