import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Issue } from '../issue';
import { IssuesServiceService } from '../issues-service.service';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.css']
})
export class ReportIssueComponent implements OnInit {

  issueForm: FormGroup | undefined;
  suggestions: Issue[]= [];

  @Output() formClose = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private issueService: IssuesServiceService) {

  }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      priority: ['', Validators.required]
    });

    this.issueForm.controls['title'].valueChanges.subscribe((
      title: string) => {
      this.suggestions =
      this.issueService.getSuggestions(title);
      });
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
      }
      
    this.issueService.addIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
