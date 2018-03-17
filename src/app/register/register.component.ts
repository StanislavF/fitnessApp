import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterInComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToLogIn(){
    this.router.navigate(["/log-in"]);
  }


}
