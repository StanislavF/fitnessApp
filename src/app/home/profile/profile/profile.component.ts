import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public openedPage: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRoutes();
  }

  getRoutes() {
    const segments: UrlSegment[] = this.route.snapshot.url;
    this.openedPage=segments[0].path;
  }

}
