import {AccordionModule} from 'primeng/accordion';

import { NavigationEnum } from './../shared/models/navigationEnum.enum';
import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public opendPage = NavigationEnum.ACCOUNT;
  public trainers = [1,2,3,4,5,6,7];

  constructor(
    private renderer: Renderer2
    
  ) { }

  ngOnInit() {
  }

  accountClicked(){
    this.opendPage = NavigationEnum.ACCOUNT;
  }

  myTrainersClicked(){
    this.opendPage = NavigationEnum.MY_TRAINERS;
  }

  myClientsClicked(){
    this.opendPage = NavigationEnum.MY_CLIENTS;
  }

  searchTrainerClicked(){
    this.opendPage = NavigationEnum.SEARCH_TRAINER;
  }

}
