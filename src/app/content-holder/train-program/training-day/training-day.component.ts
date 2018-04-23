import { Exercise } from './../../../shared/models/exercise.model';
import { Component, OnInit, Input } from '@angular/core';
import { TrainingDay } from '../../../shared/models/training-day.model';
import { Router } from '@angular/router';
import { TrainProgramModalService } from '../train-program-modal.service';

@Component({
  selector: 'app-training-day',
  templateUrl: './training-day.component.html',
  styleUrls: ['./training-day.component.scss']
})
export class TrainingDayComponent implements OnInit {

  @Input() trainingDay: TrainingDay;
  public isTrainer: boolean;

  constructor(
    private router: Router,
    private modalService: TrainProgramModalService
  ) { }

  ngOnInit() {
    let url = this.router.url;
    let urlParts = url.split("/");

    if(urlParts[2]==="my-clients"){
      this.isTrainer=true;
    } else {
      this.isTrainer=false;
    }
  }

  openModal(){
    this.modalService.openModal(this.trainingDay);
  }


}
