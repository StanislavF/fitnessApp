import { UtilsService } from './../../shared/services/utils-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-row',
  templateUrl: './search-result-row.component.html',
  styleUrls: ['./search-result-row.component.css']
})
export class SearchResultRowComponent implements OnInit {

  public isBodyOpened: boolean;
  public opendPage: String;

  constructor(
    private router: Router,
    private utilsService: UtilsService
  ) {
    this.isBodyOpened = false;
  }

  ngOnInit() {
    let url = this.router.url;
    this.opendPage = this.utilsService.extractPageFromURL(url);
  }

  openBody() {
    if (this.isBodyOpened == false) {
      this.isBodyOpened = true;
    } else {
      this.isBodyOpened = false;
    }
  }
}
