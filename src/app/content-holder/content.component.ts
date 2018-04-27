import { UtilsService } from './../shared/services/utils-service.service';
import { SexSearchEnum } from './../shared/models/enums/sexSearchEnum.enum';
import { ActivatedRoute, Router } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';
import {SelectItem} from 'primeng/api';

import { NavigationEnum } from './../shared/models/enums/navigationEnum.enum';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NavigService } from '../shared/services/navig-service.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public opendPage: String;

  public dropdownOptions: SelectItem[];
  public dropdownSelectedOption: SexSearchEnum;
  public isSearchedUserTrainer: Boolean;

  public trainers = [1,2,3,4,5,6,7];

  constructor(
    private navigator: NavigService,
    private router: Router,
    private utilsService: UtilsService
    
  ) {
    this.dropdownOptions = [
      {label:SexSearchEnum.BOTH, value: SexSearchEnum.BOTH},
      {label:SexSearchEnum.FEMALE, value: SexSearchEnum.FEMALE},
      {label:SexSearchEnum.MALE, value: SexSearchEnum.MALE}
    ]

   }

  ngOnInit() {
    let url = this.router.url;
    this.opendPage = this.utilsService.extractPageFromURL(url);
    this.homeClicked();
  }

  homeClicked(){
    this.opendPage = NavigationEnum.HOME;
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
    this.opendPage = NavigationEnum.SEARCH;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  accountClicked(){
    this.opendPage = NavigationEnum.ACCOUNT;
    this.navigator.navigateToMainPage(this.opendPage);
  }
}
