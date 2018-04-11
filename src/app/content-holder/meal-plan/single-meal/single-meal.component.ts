import { Router } from '@angular/router';
import { ModalSingleMealComponent } from './../modal-single-meal/modal-single-meal.component';
import { Food } from './../../../shared/models/food.model';
import { Component, OnInit, Input} from '@angular/core';
import { SingleMeal } from '../../../shared/models/single-meal.model';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-single-meal',
  templateUrl: './single-meal.component.html',
  styleUrls: ['./single-meal.component.css']
})
export class SingleMealComponent implements OnInit {

  @Input() singleMeal: SingleMeal;
  bsModalRef: BsModalRef;
  
  public isTrainer: boolean;

  constructor(
    private modalService: BsModalService,
    private router: Router  
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

  openModal() {
    this.bsModalRef = this.modalService.show(ModalSingleMealComponent,Object.assign({}, { class: 'modal-lg' }));
    //this.bsModalRef.content.closeBtnName = 'Close';
  }

}
