import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Inject
} from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  @Output() formExit: EventEmitter<boolean> = new EventEmitter();
  @Output() registerDone: EventEmitter<boolean> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AuthComponent>) {
  }
  // @Inject(MAT_DIALOG_DATA) public data: any

  public closeDialog() {
    this.dialogRef.close();
  }
}
