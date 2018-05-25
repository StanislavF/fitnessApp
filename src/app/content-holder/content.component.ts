import { User } from './../shared/models/user.model';
import { UserHttpService } from './../shared/services/http-services/user-http.service';
import { UtilsService } from './../shared/services/utils-service.service';
import { SexSearchEnum } from './../shared/models/enums/sexSearchEnum.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { SelectItem } from 'primeng/api';

import { NavigationEnum } from './../shared/models/enums/navigationEnum.enum';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigService } from '../shared/services/navig-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchData } from '../shared/models/search-data.model';
import { SearchContentService } from './search-content-service.service';
import { SearchUser } from '../shared/models/search-user.model';
import { isTrainerSearchEnum } from '../shared/models/enums/isTrainerSearchEnum.enum';
import { ClientRequestService } from './client-requests.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ClientRequestService]
})
export class ContentComponent implements OnInit {

  private loggedUser: string;
  public opendPage: String;
  public isLoggedUserTrainer: boolean;

  public trainersClientsArr: User[];
  public clickedTrainerClientIndex;

  public dropdownOptionsSex: SelectItem[];
  public dropdownSelectedSexOption: string;
  public dropdownOptionsTrainer: SelectItem[];
  public dropdownSelectedIsTrainerOption: string;
  public searchForm: FormGroup;
  private areAllSearchInputsNull: boolean;

  constructor(
    private navigator: NavigService,
    private router: Router,
    private utilsService: UtilsService,
    private userHttpService: UserHttpService,
    private searchContentService: SearchContentService,
    private clientRequestService: ClientRequestService
  ) {
    this.dropdownOptionsSex = [
      { label: SexSearchEnum.BOTH, value: SexSearchEnum.BOTH },
      { label: SexSearchEnum.FEMALE, value: SexSearchEnum.FEMALE },
      { label: SexSearchEnum.MALE, value: SexSearchEnum.MALE }
    ]
    this.dropdownOptionsTrainer = [
      { label: isTrainerSearchEnum.BOTH, value: isTrainerSearchEnum.BOTH },
      { label: isTrainerSearchEnum.TRUE, value: isTrainerSearchEnum.TRUE },
      { label: isTrainerSearchEnum.FALSE, value: isTrainerSearchEnum.FALSE }
    ]

    this.areAllSearchInputsNull = true;
    this.loggedUser = localStorage.getItem("username");
    this.isLoggedUserTrainer = localStorage.getItem("isTrainer") == "true";
  }

  ngOnInit() {
    let url = this.router.url;
    this.opendPage = this.utilsService.extractPageFromURL(url);
    this.homeClicked();

    this.searchForm = new FormGroup({
      username: new FormControl,
      firstName: new FormControl,
      lastName: new FormControl,
      fromAge: new FormControl,
      toAge: new FormControl,
      isTrainer: new FormControl,
      sex: new FormControl
    });
  }

  homeClicked() {
    this.opendPage = NavigationEnum.HOME;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  myTrainersClicked() {

    this.opendPage = NavigationEnum.MY_TRAINERS;
    this.navigator.navigateToMainPage(this.opendPage);

    this.userHttpService.getAllTrainers(this.loggedUser).subscribe(
      (data: User[]) => {
        this.trainersClientsArr = data;
      },
      err => console.error(err)
    );
  }

  myClientsClicked() { 

    this.opendPage = NavigationEnum.MY_CLIENTS;
    this.navigator.navigateToMainPage(this.opendPage);

    this.userHttpService.getAllClients(this.loggedUser).subscribe(
      (data: User[]) => {
        this.trainersClientsArr = data;
      },
      err => console.error(err)
    );
  }

  searchTrainerClicked() {
    this.opendPage = NavigationEnum.SEARCH;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  accountClicked() {
    this.opendPage = NavigationEnum.ACCOUNT;
    this.navigator.navigateToMainPage(this.opendPage);
  }

  onTabOpen(clickedElement) {
    this.clickedTrainerClientIndex = clickedElement.index;
  }

  //ToDO check if areAllSearchInputsNull shpuld be set to null herex
  search() {

    let searchData = new SearchData();

    if (this.searchForm.get("username").value != null
      && this.searchForm.get("username").value.trim() != "") {
      searchData.username = this.searchForm.get("username").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("firstName").value != null
      && this.searchForm.get("firstName").value.trim() != "") {
      searchData.firstName = this.searchForm.get("firstName").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("lastName").value != null
      && this.searchForm.get("lastName").value.trim() != "") {
      searchData.lastName = this.searchForm.get("lastName").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("fromAge").value != null
      && this.searchForm.get("fromAge").value.trim() != "") {
      searchData.fromAge = this.searchForm.get("fromAge").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("toAge").value != null
      && this.searchForm.get("toAge").value.trim() != "") {
      searchData.toAge = this.searchForm.get("toAge").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.dropdownSelectedIsTrainerOption != undefined
      && this.dropdownSelectedIsTrainerOption != isTrainerSearchEnum.BOTH) {
      searchData.isTrainer = (this.dropdownSelectedIsTrainerOption === isTrainerSearchEnum.TRUE);
      this.areAllSearchInputsNull = false;
    }
    if (this.dropdownSelectedSexOption != undefined
      && this.dropdownSelectedSexOption != SexSearchEnum.BOTH) {
      searchData.sex = this.dropdownSelectedSexOption;
      this.areAllSearchInputsNull = false;
    }

    if (this.areAllSearchInputsNull) {
      searchData = null;
    }

    this.userHttpService.searchUser(searchData).subscribe(
      (data: SearchUser[]) => {
        this.searchContentService.searchResult = data;
        this.navigator.navigateToMainPage(NavigationEnum.SEARCH);
      }
    );
  }

  getClientRequests(){
    this.userHttpService.getClientRequests(localStorage.getItem("username")).subscribe(
      (data: SearchUser[]) => {
        this.clientRequestService.clientRequests=data;
        this.navigator.navigateToClientRequests();
      }
    );
  }

  logOut(){
    this.utilsService.clearLocalStorage();
    this.navigator.navigateToLogIn();
  }
}
