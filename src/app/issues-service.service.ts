import { Injectable } from '@angular/core';
import { issues } from 'src/assets/mock-issues';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesServiceService {

  private issuesList: Issue[] = issues;

  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issuesList
      .filter(il => !il.completed);
  }

  addIssue(issue: Issue) {
    issue.id = this.issuesList.length + 1;
    this.issuesList.push(issue);
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date()
    };
    const index = this.issuesList.findIndex(i => i ===
      issue);
    this.issuesList[index] = selectedIssue;
  }

  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
    return this.issuesList.filter(issue =>
    issue.title.indexOf(title) !== -1);
    }
    return [];
   }

}
