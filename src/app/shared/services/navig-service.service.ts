import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigService {

  constructor(
    private router: Router
  ) { }

  navigateToMainPage(page){
    this.router.navigate(["app/"+page]);
  }

}
