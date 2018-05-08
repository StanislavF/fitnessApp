import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  public user: User;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  hideModal() {
    this.bsModalRef.hide();
  }


}
