import { Component, OnInit, Input } from '@angular/core';
import { SearchUser } from '../../shared/models/search-user.model';
import { SearchContentService } from '../search-content-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public listSearchUsers: SearchUser[];

  constructor(
    public searchResultService: SearchContentService
  ) { 
    this.listSearchUsers = this.searchResultService.searchResult;
  }

  ngOnInit() {
  }

}
