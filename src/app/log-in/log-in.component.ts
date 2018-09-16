import { LogInData } from './../shared/models/log-in-data.model';
import { UserHttpService } from './../shared/services/http-services/user-http.service';
import { Component, OnInit, Pipe } from '@angular/core';

import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavigService } from '../shared/services/navig-service.service';
import { NavigationEnum } from '../shared/models/enums/navigationEnum.enum';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup;

  constructor(
    private router: Router,
    private userHttpService: UserHttpService,
    private navigService: NavigService
  ) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      username: new FormControl,
      password: new FormControl
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  logIn() {

    let logInData = new LogInData();
    logInData.username = this.logInForm.get("username").value;
    logInData.password = this.logInForm.get("password").value;

    this.userHttpService.logIn(logInData).subscribe(
      (data: LogInData) => {
        if (data == null) {
          alert("Wrong username and/or password");
        } else {
          localStorage.setItem("username", data.username);
          localStorage.setItem("isTrainer", String(data.isTrainer));
        }
        this.navigService.navigateToMainPage(NavigationEnum.HOME);
      },
      error => {
        alert("Wrong username and/or password");
      }
    );
  }

}
