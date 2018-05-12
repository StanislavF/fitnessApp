import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TrainingHttpService } from './../../shared/services/http-services/training-http.service';
import { UtilsService } from './../../shared/services/utils-service.service';
import { Component, OnInit } from '@angular/core';
import { TrainingDayComponent } from './training-day/training-day.component';
import { TrainingDay } from '../../shared/models/training-day.model';
import { TrainProgramModalService } from './train-program-modal.service';
import { DatePipe } from '@angular/common';

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
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { 
    this.datePipe = new DatePipe("en-US");
    this.isTrainer=localStorage.getItem("isTrainer") == "true";
    this.isMyClientsclicked = this.utilsService.isMyClientsClicked(this.router.url);
    this.date = this.datePipe.transform(new Date(), "yyyy-ww");
  }

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
  }

  openModal(){
    this.modalService.openModal(null, this.username, this.date);
  }

  onDateChange(date: string) {
    this.date = date;

    if(this.isMyClientsclicked){
      this.getTrainingDays(this.date, this.username, localStorage.getItem("username"));
    } else {
      this.getTrainingDays(this.date, localStorage.getItem("username"), this.username);
    }
  }

  getTrainingDays(date: string, clientUsername: string, trainerUsername: string){
    this.trainingHttpService.getTrainingDays(date, clientUsername, trainerUsername).subscribe(
      (data: TrainingDay[]) => {
        this.trainingDays = data;
      }
    );
  }

}
