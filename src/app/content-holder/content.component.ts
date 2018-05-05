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


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: []
})
export class ContentComponent implements OnInit {

  private loggedUser: string;
  public opendPage: String;

  public trainersClientsArr: User[];
  public clickedTrainerClientIndex;

  public dropdownOptions: SelectItem[];
  public dropdownSelectedOption: SexSearchEnum;
  public isSearchedUserTrainer: Boolean;
  public searchForm: FormGroup;
  private areAllSearchInputsNull: boolean;

  public trainers = [1, 2, 3, 4, 5, 6, 7];

  constructor(
    private navigator: NavigService,
    private router: Router,
    private utilsService: UtilsService,
    private userHttpService: UserHttpService,
    private searchContentService: SearchContentService
  ) {
    this.dropdownOptions = [
      { label: SexSearchEnum.BOTH, value: SexSearchEnum.BOTH },
      { label: SexSearchEnum.FEMALE, value: SexSearchEnum.FEMALE },
      { label: SexSearchEnum.MALE, value: SexSearchEnum.MALE }
    ]

    this.areAllSearchInputsNull = true;

  }

  ngOnInit() {
    let url = this.router.url;
    this.opendPage = this.utilsService.extractPageFromURL(url);
    this.homeClicked();

    this.searchForm = new FormGroup({
      username: new FormControl,
      firstname: new FormControl,
      lastname: new FormControl,
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

  search() {

    let searchData = new SearchData();

    if (this.searchForm.get("username") != null) {
      searchData.username = this.searchForm.get("username").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("firstName") != null) {
      searchData.firstName = this.searchForm.get("firstName").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("lastName") != null) {
      searchData.lastName = this.searchForm.get("lastName").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("fromAge") != null) {
      searchData.fromAge = this.searchForm.get("fromAge").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("toAge") != null) {
      searchData.toAge = this.searchForm.get("toAge").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("isTrainer") != null) {
      searchData.isTrainer = this.searchForm.get("isTrainer").value;
      this.areAllSearchInputsNull = false;
    }
    if (this.searchForm.get("sex") != null) {
      searchData.sex = this.searchForm.get("sex").value;
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
    )
  }
}
