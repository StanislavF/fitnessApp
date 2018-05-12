import { ExerciseRow } from './../../../shared/models/exercise-row.model';
import { Component, OnInit, Input } from '@angular/core';
import { TrainingDay } from '../../../shared/models/training-day.model';
import { Router } from '@angular/router';
import { TrainProgramModalService } from '../train-program-modal.service';
import { TrainingHttpService } from '../../../shared/services/http-services/training-http.service';
import { UtilsService } from '../../../shared/services/utils-service.service';

@Component({
  selector: 'app-training-day',
  templateUrl: './training-day.component.html',
  styleUrls: ['./training-day.component.css']
})
export class TrainingDayComponent implements OnInit {

  @Input() trainingDay: TrainingDay;
  @Input() clickedUsername: string;
  @Input() dateFromDatepicker: string;

  public isMyClientsClicked: boolean;

  constructor(
    private router: Router,
    private modalService: TrainProgramModalService,
    private trainingHttService: TrainingHttpService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.isMyClientsClicked = this.utilsService.isMyClientsClicked(this.router.url);
  }

  openModal(){
    this.modalService.openModal(this.trainingDay, this.clickedUsername, this.dateFromDatepicker);
  }

  deleteTrainingDay(){
    let clientUsername = this.clickedUsername;
    let trainerUsername = localStorage.getItem("username");

    this.trainingHttService.deleteTrainingDay(this.trainingDay.id, clientUsername, trainerUsername).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
