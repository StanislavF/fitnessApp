import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SearchUser } from '../shared/models/search-user.model';
import { User } from '../shared/models/user.model';

@Injectable()
export class ClientRequestService {

  public clientRequests: SearchUser[];

  public trainersClientsArr: string[];

}