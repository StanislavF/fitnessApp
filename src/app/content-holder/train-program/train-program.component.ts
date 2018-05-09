import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TrainingHttpService } from './../../shared/services/http-services/training-http.service';
import { UtilsService } from './../../shared/services/utils-service.service';
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
  public isMyClientsclicked: boolean;
  private username: string;

  public date: string;

  constructor(
    private modalService: TrainProgramModalService,
    private utilsService: UtilsService,
    private trainingHttpService: TrainingHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (data: ParamMap) => {
        this.username = data.get('username');
        if(this.isMyClientsclicked){
          this.getTrainingDays(this.date, this.username, localStorage.getItem("username"));
        } else {
          this.getTrainingDays(this.date, localStorage.getItem("username"), this.username);
        }
      }
    );

    // this.trainingDays = [
    //   {
    //     tdNo: 1,
    //     tdTitle: "Training A",
    //     exercises: [
    //       {
    //         exerciseNo: "1",
    //         exerciseName: "2",
    //         sets: "3",
    //         reps: "4",
    //         weight: "5",
    //         comment: "6"
    //       },
    //       {
    //         exerciseNo: "1",
    //         exerciseName: "2",
    //         sets: "3",
    //         reps: "4",
    //         weight: "5",
    //         comment: "6"
    //       },
    //       {
    //         exerciseNo: "1",
    //         exerciseName: "2",
    //         sets: "3",
    //         reps: "4",
    //         weight: "5",
    //         comment: "6"
    //       },
    //       {
    //         exerciseNo: "1",
    //         exerciseName: "2",
    //         sets: "3",
    //         reps: "4",
    //         weight: "5",
    //         comment: "6"
    //       },
    //       {
    //         exerciseNo: "1",
    //         exerciseName: "2",
    //         sets: "3",
    //         reps: "4",
    //         weight: "5",
    //         comment: "6"
    //       },
    //       {
    //         exerciseNo: "1",
    //         exerciseName: "2",
    //         sets: "3",
    //         reps: "4",
    //         weight: "5",
    //         comment: "6"
    //       }
    //     ]
    //   }
    // ];
  }

  openModal(){
    this.modalService.openModal(null);
  }

  onDateChange(date: string) {
    this.date = date;
  }

  getTrainingDays(date: string, clientUsername: string, trainerUsername: string){
    this.trainingHttpService.getTrainingDays(date, clientUsername, trainerUsername).subscribe(
      (data: TrainingDay[]) => {
        this.trainingDays = data;
      }
    );
  }

}
