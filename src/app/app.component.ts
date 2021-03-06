import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from './app.service';
import { Issue } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  issues: Issue[];

  constructor(public appService: AppService) {
    this.issues = [];
  }

  ngOnInit() {
    this.getIssues();
  }

  ngOnDestroy() { }

  getIssues() {
    this.appService.getIssues().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        // GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request
        if (data[i]['pull_request'] === undefined) {
          const issue: Issue = {
            id: data[i]['number'],
            title: data[i]['title'],
            URL: data[i]['html_url'],
            created_at: data[i]['created_at']
          }
          this.issues.push(issue);
        }
      }
    })
  }

}
