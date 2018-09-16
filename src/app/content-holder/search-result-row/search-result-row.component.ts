import { UtilsService } from './../../shared/services/utils-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchUser } from '../../shared/models/search-user.model';
import { UserHttpService } from '../../shared/services/http-services/user-http.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-search-result-row',
  templateUrl: './search-result-row.component.html',
  styleUrls: ['./search-result-row.component.css']
})
export class SearchResultRowComponent implements OnInit {

  public isBodyOpened: boolean;
  public opendPage: String;
  @Input() searchUser: SearchUser;
  @Output() onRequestAccOrRej: EventEmitter<SearchUser>;
  public user: User;

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private userHttpService: UserHttpService
  ) {
    this.isBodyOpened = false;
    this.onRequestAccOrRej = new EventEmitter();
    this.user = null;
  }

  ngOnInit() {
    let url = this.router.url;
    this.opendPage = this.utilsService.extractPageFromURL(url);
  }

  openBody() {
    if (this.isBodyOpened == false) {
      if(this.user==null){
        this.userHttpService.getUserData(this.searchUser.username).subscribe(
          (data: User) => {
            this.user = data;
            this.user.image = "data:image/png;base64," + this.user.image;
            this.isBodyOpened = true;
          },
          error => {
            console.error(error);
          }
        );
      } else {
        this.isBodyOpened = true;
      }
      
    } else {
      this.isBodyOpened = false;
    }
  }

  requestTrainer() {

    event.stopPropagation();

    this.userHttpService.requestUserForTrainer(localStorage.getItem("username"), this.searchUser.username)
      .subscribe(
        data => {
          alert(data == "CREATED" ? "Trainer requested" : "Already " + data);
        },
        error => {
          alert(error);
        }
      );
  }

  acceptClient(event) {
    event.stopPropagation();

    this.userHttpService.acceptClientRequest(this.searchUser.username, localStorage.getItem("username"))
      .subscribe(
        data => {
          this.onRequestAccOrRej.emit(this.searchUser);
          alert(data);
        },
        error => {
          alert(error);
        }
      );
  }

  rejectClient(event) {
    event.stopPropagation();

    this.userHttpService.rejectClientRequest(this.searchUser.username, localStorage.getItem("username"))
      .subscribe(
        data => {
          this.onRequestAccOrRej.emit(this.searchUser);
          alert(data);
        },
        error => {
          alert(error);
        }
      );
  }


}
