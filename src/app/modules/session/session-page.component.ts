import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.css']
})
export class SessionPageComponent implements OnInit {
  // Async variable to store season data
  // public season$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    // TODO: implement service to fetch season data
    // private seasonService: SeasonService
  ) { }

  ngOnInit(): void {
    // Example of implementation

    // **
    // seasonId - this is id of season, better to use slug approach
    // this.route.data - this is data which we pass in app-routing.module.ts
    // **
    // const { seasonId } = this.route.data;

    // **
    // seasonService - example of the service, let's say it has getSeason method to fetch season data
    // **
    // this.season$ = this.seasonService.getSeason(seasonId);
  }
}
