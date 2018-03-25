import {AccordionModule} from 'primeng/accordion';

import { NavigationEnum } from './../shared/models/navigationEnum.enum';
import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { NavigService } from '../shared/services/navig-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public opendPage = NavigationEnum.ACCOUNT;
  public trainers = [1,2,3,4,5,6,7];

  constructor(
    private renderer: Renderer2,
    private navigator: NavigService
    
  ) { }

  ngOnInit() {
  }

  accountClicked(){
    this.opendPage = NavigationEnum.ACCOUNT;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  myTrainersClicked(){
    this.opendPage = NavigationEnum.MY_TRAINERS;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  myClientsClicked(){
    this.opendPage = NavigationEnum.MY_CLIENTS;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  searchTrainerClicked(){
    this.opendPage = NavigationEnum.SEARCH_TRAINER;
    this.navigator.navigateToMainPage(this.opendPage);
  }

}
