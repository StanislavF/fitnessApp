import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SexSearchEnum } from '../models/enums/sexSearchEnum.enum';

@Injectable()
export class UtilsService {

  constructor(
    private router: Router
  ) { }

  navigateToMainPage(page){
    this.router.navigate(["app/"+page]);
  }

  extractPageFromURL(url: String){
    let urlParts = url.split("/");

    return urlParts[2];
  }

  isMyClientsClicked(url: String){
    let urlParts = url.split("/");

    return urlParts[2] == "my-clients";
  }

  clearLocalStorage(){
    localStorage.removeItem("username");
    localStorage.removeItem("isTrainer");
  }

  getSexEnumValue(text: string): SexSearchEnum{
    switch(text){
      case SexSearchEnum.BOTH: return SexSearchEnum.BOTH;
      case SexSearchEnum.FEMALE: return SexSearchEnum.FEMALE;
      case SexSearchEnum.MALE: return SexSearchEnum.MALE;
    }

  }

}
