import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserHttpService } from '../../shared/services/http-services/user-http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user: User;
  private username;

  constructor(
    private userHttpService: UserHttpService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(
      (data: ParamMap) => {
        this.username = data.get('username') != null
          ? data.get('username') : localStorage.getItem("username");
          this.getUserData();
      },
      err => {

      }
    );
    
  }

  ngOnInit() {




  }

  getUserData() {
    this.userHttpService.getUserData(this.username).subscribe(
      (data: User) => {
        this.user = data;
        this.user.image = "data:image/png;base64," + data.image;
      },
      err => {
        console.error(err);
      }
    );
  }

}
