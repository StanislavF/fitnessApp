import { Component, OnInit } from '@angular/core';
import { ClientRequestService } from '../client-requests.service';
import { SearchUser } from '../../shared/models/search-user.model';

@Component({
  selector: 'app-client-requests',
  templateUrl: './client-requests.component.html',
  styleUrls: ['./client-requests.component.css']
})
export class ClientRequestsComponent implements OnInit {

  constructor(
    public clientRequestService: ClientRequestService
  ) { }

  ngOnInit() {
  }

  onRequestAccOrRej(searchUser: SearchUser){
    let index = this.clientRequestService.clientRequests.indexOf(searchUser);
    this.clientRequestService.clientRequests.splice(index,1);
  }

}
