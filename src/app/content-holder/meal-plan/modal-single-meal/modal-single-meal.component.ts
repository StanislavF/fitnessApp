import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component, OnInit, TemplateRef  } from '@angular/core';


@Component({
  selector: 'app-modal-single-meal',
  templateUrl: './modal-single-meal.component.html',
  styleUrls: ['./modal-single-meal.component.css']
})
export class ModalSingleMealComponent implements OnInit {


  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }



}
