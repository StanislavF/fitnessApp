import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { BsModalRef } from 'ngx-bootstrap';
import { UserHttpService } from '../../../shared/services/http-services/user-http.service';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  public user: User;

  constructor(
    public bsModalRef: BsModalRef,
    private userHttpService: UserHttpService
  ) { }

  ngOnInit() {
  }

  hideModal() {
    this.bsModalRef.hide();
  }

  onSave(){
    if(window.confirm("Are yo?")){
      this.userHttpService.updateUser(this.user).subscribe(
        result => {
          console.log(result);
        }
      );
    }
  }


}
