import { Component, OnInit } from '@angular/core';
import { TrainingDayComponent } from './training-day/training-day.component';
import { TrainingDay } from '../../shared/models/training-day.model';
import { TrainProgramModalService } from './train-program-modal.service';

@Component({
  selector: 'app-train-program',
  templateUrl: './train-program.component.html',
  styleUrls: ['./train-program.component.css']
})
export class TrainProgramComponent implements OnInit {

  public trainingDays: TrainingDay[];
  public isTrainer: boolean;

  public date: String;

  constructor(
    private modalService: TrainProgramModalService
  ) { }

  ngOnInit() {

    this.trainingDays = [
      {
        tdNo: 1,
        tdTitle: "Training A",
        exercises: [
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
        ]
      }
    ];
  }

  openModal(){
    this.modalService.openModal(null);
  }

  onDateChange(date: String) {
    this.date = date;
  }

}
