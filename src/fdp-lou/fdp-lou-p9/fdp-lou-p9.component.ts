import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FdpLouLooseDialog} from '../fdp-lou-loose-dialog/fdp-lou-loose.dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fdp-lou-p8',
  templateUrl: './fdp-lou-p9.component.html',
  styleUrls: ['./fdp-lou-p9.component.scss']
})
export class FdpLouP9Component implements OnInit {

  public answerFormGroup: FormGroup;
  public answer = {value: ''};
  public music;
  public loose;

  constructor(
    public dialog: MatDialog,
    public router: Router) {
    this.answerFormGroup = new FormGroup({
      answer: new FormControl(this.answer.value, []),
    });
  }

  ngOnInit() {}

}
