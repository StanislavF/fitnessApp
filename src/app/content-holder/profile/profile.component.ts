import { User } from './../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { NavigationEnum } from '../../shared/models/enums/navigationEnum.enum';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';
import { UserHttpService } from '../../shared/services/http-services/user-http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public openedPage: any;
  public isTrainer: boolean;
  private segments: UrlSegment[];

  public trainerClientStatus: string;

  @Input() user: User;
  public isMarginNeeded: boolean;
  bsModalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private userHttpService: UserHttpService
  ) {
    this.segments = this.route.snapshot.url;
    this.openedPage = this.segments[0].path;
  }

  ngOnInit() {
    this.getRoutes();
    this.getTrainerClientStatus();
  }

  getRoutes() {

    if (this.openedPage !== NavigationEnum.SEARCH && (this.openedPage !== NavigationEnum.MY_CLIENTS)) {
      this.isMarginNeeded = true;
    } else if (this.openedPage === NavigationEnum.MY_CLIENTS && this.segments[1].path === "profile") {
      this.isMarginNeeded = true;
    } else {
      this.isMarginNeeded = false;
    }
  }

  openModal() {
    this.bsModalRef = this.modalService.show(ModalProfileComponent, {
      class: 'modal-lg',
      backdrop: "static",
      initialState: {
        user: this.user
      }
    });
  }

  cancelTrainerClient() {

    if(window.confirm("Are you sure")){
      if (this.openedPage === NavigationEnum.MY_CLIENTS) {
        this.userHttpService.cancelTrainerClient(this.user.username, localStorage.getItem("username")).subscribe(
          data => {
            console.log(data);
            this.trainerClientStatus = "CANCELED";
          }
        );
      } else if (this.openedPage === NavigationEnum.MY_TRAINERS) {
        this.userHttpService.cancelTrainerClient(localStorage.getItem("username"), this.user.username).subscribe(
          data => {
            console.log(data);
            this.trainerClientStatus = "CANCELED";
          }
        );
      }
    }

  }

  getTrainerClientStatus() {
    if (this.openedPage === NavigationEnum.MY_CLIENTS && this.segments[1].path === "profile") {
      this.userHttpService.getTrainerClientStatus(this.user.username, localStorage.getItem("username")).subscribe(
        data => {
          this.trainerClientStatus = data;
        } 
      );
    } else if (this.openedPage === NavigationEnum.MY_TRAINERS ) {
      this.userHttpService.getTrainerClientStatus(localStorage.getItem("username"), this.user.username).subscribe(
        data => {
          this.trainerClientStatus = data;
        }
      );
    }
  }

  deleteTrainerClient(){
    if (this.openedPage === NavigationEnum.MY_CLIENTS && this.segments[1].path === "profile") {
      this.userHttpService.deleteClientFromTrainer(this.user.username, localStorage.getItem("username")).subscribe(
        data => {
          console.log(data);
        } 
      );
    } else if (this.openedPage === NavigationEnum.MY_TRAINERS ) {
      this.userHttpService.deleteTrainerFromClient(localStorage.getItem("username"), this.user.username).subscribe(
        data => {
         console.log(data);
        }
      );
    }
  }

}
