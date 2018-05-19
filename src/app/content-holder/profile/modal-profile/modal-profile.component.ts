import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserHttpService } from '../../../shared/services/http-services/user-http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  public user: User;

  constructor(
    public bsProfileModalRef: BsModalRef,
    private userHttpService: UserHttpService
  ) { }

  ngOnInit() {

  }

  hideModalProfileModal() {
    this.bsProfileModalRef.hide();
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
