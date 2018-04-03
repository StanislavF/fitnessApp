import { ActivatedRoute, Router } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';

import { NavigationEnum } from './../shared/models/navigationEnum.enum';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NavigService } from '../shared/services/navig-service.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public opendPage;
  public trainers = [1,2,3,4,5,6,7];

  constructor(
    private navigator: NavigService,
    private router: Router,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    let url = this.router.url;
    this.opendPage = this.extractPageFromURL(url);
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
    this.opendPage = NavigationEnum.SEARCH_TRAINER;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  accountClicked(){
    this.opendPage = NavigationEnum.ACCOUNT;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  extractPageFromURL(url: String){
    let urlParts = url.split("/");

    return urlParts[2];
  }
}
