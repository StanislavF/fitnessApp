import { User } from './../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { NavigationEnum } from '../../shared/models/enums/navigationEnum.enum';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';
import { UserHttpService } from '../../shared/services/http-services/user-http.service';
import { ClientRequestService } from '../client-requests.service';
import { NavigService } from '../../shared/services/navig-service.service';

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
  
  bsProfileModalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private userHttpService: UserHttpService,
    private clientRequestService: ClientRequestService,
    private navigationService: NavigService
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
    this.bsProfileModalRef = this.modalService.show(ModalProfileComponent, {
      class: 'modal-lg',
      backdrop: "static",
      initialState: {
        user: this.user
      }
    });
  }

  cancelTrainerClient() {


    if (this.openedPage === NavigationEnum.MY_CLIENTS) {
      if (window.confirm("Are you sure you want to cancel the connection with this client? You will be able to see his data, but not to edit it")) {
        this.userHttpService.cancelTrainerClient(this.user.username, localStorage.getItem("username")).subscribe(
          data => {
            console.log(data);
            this.trainerClientStatus = "CANCELED";
          }
        );
      }
    } else if (this.openedPage === NavigationEnum.MY_TRAINERS) {
      if (window.confirm("Are you sure you want to cancel the connection with this trainer? You will be able to see his data, but not to recieve new data")) {
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
    } else if (this.openedPage === NavigationEnum.MY_TRAINERS) {
      this.userHttpService.getTrainerClientStatus(localStorage.getItem("username"), this.user.username).subscribe(
        data => {
          this.trainerClientStatus = data;
        }
      );
    }
  }

  deleteTrainerClient() {

    if (this.openedPage === NavigationEnum.MY_CLIENTS && this.segments[1].path === "profile") {
      if (window.confirm("Are you sure you want to delete this client. You won't see his data anymore.")) {
        this.userHttpService.deleteClientFromTrainer(this.user.username, localStorage.getItem("username")).subscribe(
          data => {
            console.log(data);
            this.clientRequestService.trainersClientsArr = this.clientRequestService.trainersClientsArr.filter( (item) => item != this.user.username);
            this.navigationService.navigateToMainPage(NavigationEnum.MY_CLIENTS);
          }
        );
      }
    } else if (this.openedPage === NavigationEnum.MY_TRAINERS) {
      if (window.confirm("Are you sure you want to delete this trainer. You won't see his data anymore.")) {
        this.userHttpService.deleteTrainerFromClient(localStorage.getItem("username"), this.user.username).subscribe(
          data => {
            console.log(data);
            this.clientRequestService.trainersClientsArr = this.clientRequestService.trainersClientsArr.filter( item => item!=this.user.username);
            this.navigationService.navigateToMainPage(NavigationEnum.MY_TRAINERS);
          }
        );
      }
    }
  }

}
