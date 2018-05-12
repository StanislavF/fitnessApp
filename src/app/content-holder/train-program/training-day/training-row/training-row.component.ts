import { ExerciseRow } from './../../../../shared/models/exercise-row.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../../../../shared/services/utils-service.service';
import { TrainingHttpService } from '../../../../shared/services/http-services/training-http.service';

@Component({
  selector: 'app-training-row',
  templateUrl: './training-row.component.html',
  styleUrls: ['./training-row.component.css']
})
export class TrainingRowComponent implements OnInit {

  @Input() exerciseRow: ExerciseRow;
  public isMyClientsClicked;
  

  constructor(
    private utilsService: UtilsService,
    private router: Router,
    private trainingHttpService: TrainingHttpService
  ) {
    this.isMyClientsClicked = this.utilsService.isMyClientsClicked(this.router.url);
   }

  ngOnInit() {
  }

  createComment() {
    let clientUsername = localStorage.getItem("username");
    let comment = this.exerciseRow.comment;
    let exerciseRowId = this.exerciseRow.id;

    this.trainingHttpService.createComment(comment, exerciseRowId, clientUsername).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
