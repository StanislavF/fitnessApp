import { Exercise } from './../../../shared/models/exercise.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-day',
  templateUrl: './training-day.component.html',
  styleUrls: ['./training-day.component.css']
})
export class TrainingDayComponent implements OnInit {

  public exercises: Exercise[];

  constructor() { }

  ngOnInit() {

    this.exercises = [
      {
        exerciseNo: "1",
        exerciseName: "2",
        sets: "3",
        reps: "4",
        weight: "5",
        comment: "6"
      },
      {
        exerciseNo: "1",
        exerciseName: "2",
        sets: "3",
        reps: "4",
        weight: "5",
        comment: "6"
      },
      {
        exerciseNo: "1",
        exerciseName: "2",
        sets: "3",
        reps: "4",
        weight: "5",
        comment: "6"
      },
      {
        exerciseNo: "1",
        exerciseName: "2",
        sets: "3",
        reps: "4",
        weight: "5",
        comment: "6"
      },
      {
        exerciseNo: "1",
        exerciseName: "2",
        sets: "3",
        reps: "4",
        weight: "5",
        comment: "6"
      },
      {
        exerciseNo: "1",
        exerciseName: "2",
        sets: "3",
        reps: "4",
        weight: "5",
        comment: "6"
      }

    ];
  }

}
