import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fdp-user-auth',
  templateUrl: './fdp-user-auth.component.html',
  styleUrls: ['./fdp-user-auth.component.scss'],
})
export class FdpUserAuthComponent implements OnInit {

  private _showForm: boolean;
  @Output() onFormExit: EventEmitter<boolean> = new EventEmitter();
  @Output() onRegisterDone: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.showForm = true;
  }

  ngOnInit() {
  }

  set showForm(value: boolean) {
    this._showForm = value;
    this.onFormExit.emit(this._showForm);
  }

  public closeModale() {
    this.showForm = false;
  }
}
