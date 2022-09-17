import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { ReportIssueComponent } from './report-issue/report-issue.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    IssuesListComponent,
    ReportIssueComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
