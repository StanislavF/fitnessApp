import { User } from './../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { NavigationEnum } from '../../shared/models/enums/navigationEnum.enum';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public openedPage: any;
  public isTrainer: boolean;
  @Input() user: User;
  public isMarginNeeded: boolean;
  bsModalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.getRoutes();
  }

  getRoutes() {
    const segments: UrlSegment[] = this.route.snapshot.url;
    this.openedPage = segments[0].path;

    if (this.openedPage !== NavigationEnum.SEARCH && (this.openedPage !== NavigationEnum.MY_CLIENTS)){
      this.isMarginNeeded = true;
    } else if (this.openedPage === NavigationEnum.MY_CLIENTS && segments[1].path === "profile") {
      this.isMarginNeeded = true;
    } else {
      this.isMarginNeeded = false;
    }
  }

  openModal() {
    this.bsModalRef = this.modalService.show(ModalProfileComponent, { 
      class: 'modal-lg', 
      backdrop: "static" , 
      initialState: {
        user: this.user
      }
    });
  }

}
