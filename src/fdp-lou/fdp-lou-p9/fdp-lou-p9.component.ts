import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FdpLouLooseDialog} from '../fdp-lou-loose-dialog/fdp-lou-loose.dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fdp-lou-p8',
  templateUrl: './fdp-lou-p9.component.html',
  styleUrls: ['./fdp-lou-p9.component.scss']
})
export class FdpLouP9Component implements OnInit, OnDestroy {

  public music;

  constructor(
    public dialog: MatDialog,
    public router: Router) {

    this.music = new Audio('/assets/images/loup/jeux/dsl.mp3');
    this.music.loop = true;
    this.music.play();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.music.pause();
  }

}
