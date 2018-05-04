import { User } from './../shared/models/user.model';
import { UserHttpService } from './../shared/services/http-services/user-http.service';
import { Component, OnInit } from '@angular/core';
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
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterInComponent implements OnInit {

  private isNoChecked: boolean = true;
  private isYesChecked: boolean = false;
  private passowrdsMsg = "";
  private isRegBtnDisabled = false;
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private userHttpService: UserHttpService
  ) { }
  

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      passwordConf: new FormControl()
    });
  }

  goToLogIn(){
    this.router.navigate(["/log-in"]);
  }

  swapCheckboxValues(){
    this.isNoChecked = !this.isNoChecked;
    this.isYesChecked = !this.isYesChecked;
  }

  confirmPassword(){
    let a = this.registerForm.value;

    if(a.password != a.passwordConf){
      this.passowrdsMsg="Passords does not match";
      this.disableRegBtn();
    } else {
      this.passowrdsMsg="";
      this.enableRegBtn();
    }
  }

  disableRegBtn(){
    this.isRegBtnDisabled=true;
  }

  enableRegBtn(){
    this.isRegBtnDisabled=false;
  }

  register(){

    let user: User = new User();
    user.username = this.registerForm.get('username').value;
    user.firstName = this.registerForm.get('firstName').value;
    user.lastName = this.registerForm.get('lastName').value;
    user.email = this.registerForm.get('email').value;
    user.password = this.registerForm.get('password').value;
    user.isTrainer = this.isYesChecked;

    this.userHttpService.register(user).subscribe(
      data => {
        this.goToLogIn();
      }
    );
  }


}
