import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesServiceService } from '../issues-service.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  issues: Issue[] = [];
  showReportIssue = false;
  selectedIssue: Issue | null = null;

  constructor(private issueService: IssuesServiceService) { }

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.
        selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

}
