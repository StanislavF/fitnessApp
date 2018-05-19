import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../../../shared/services/http-services/user-http.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public newPassword: string;
  public newPasswordConfirm: string;
  public oldPassword: string;

  constructor(
    private userHttpService: UserHttpService
  ) { }

  ngOnInit() {
  }

  changePassword(){
    let username = localStorage.getItem("username");

    this.userHttpService.updateUserPassword(username, this.oldPassword, this.newPassword).subscribe(
      result => {
        console.log(result);
      },
      errorResult => {
        console.error(errorResult);
      }
    );
  }
}
