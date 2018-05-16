import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FdpLouLooseDialog} from '../fdp-lou-loose-dialog/fdp-lou-loose.dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fdp-lou-p8',
  templateUrl: './fdp-lou-p8.component.html',
  styleUrls: ['./fdp-lou-p8.component.scss'],
})
export class FdpLouP8Component implements OnInit {

  public answerFormGroup: FormGroup;
  public answer = {value: ''};
  public music;
  public win;
  public loose;

  constructor(public dialog: MatDialog,
              public router: Router) {
    this.answerFormGroup = new FormGroup({
      answer: new FormControl(this.answer.value, []),
    });

    this.music = new Audio('/assets/images/loup/jeux/8/a.mp3');
    this.music.loop = true;
    this.music.play();

    this.win = new Audio('/assets/images/loup/jeux/win.mp3');
    this.loose = new Audio('/assets/images/loup/jeux/loose.mp3');
  }

  ngOnInit() {
  }

  public verifyAnswer() {
    if (this.answer.value.toUpperCase() === 'BOOM') {
      // this.music.pause();
      this.win.play();
      setTimeout(() => {
        this.router.navigateByUrl('LouPD/dsl');
      }, 2000);
    } else {
      this.loose.play();
      this.dialog.open(FdpLouLooseDialog, {
        height: '550px',
      });
    }
  }

}
