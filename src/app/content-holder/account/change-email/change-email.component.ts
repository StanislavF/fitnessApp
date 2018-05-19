import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../../../shared/services/http-services/user-http.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  public password: string;
  public email: string;
  public emailConfirm: string

  constructor(
    private userHttpService: UserHttpService
  ) {
 
   }


  ngOnInit() {
  }

  changeEmail(){

    let username = localStorage.getItem("username");

    this.userHttpService.updateUserEmail(username, this.password, this.email).subscribe(
      result => {
        console.log(result);
      },
      errorResult => {
        console.error(errorResult);
      }
    );
  }
}
