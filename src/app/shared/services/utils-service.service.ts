import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

}
