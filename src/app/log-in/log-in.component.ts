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


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup;

  constructor(
    private router: Router
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

}
