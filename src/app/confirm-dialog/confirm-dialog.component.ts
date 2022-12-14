import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() issueId: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  agree(){
    this.confirm.emit(true);
    this.issueId = null;
  }

  disagree(){
    this.confirm.emit(false);
    this.issueId = null;
  }

}
