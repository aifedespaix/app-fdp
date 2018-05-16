import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FdpLouLooseDialog} from '../fdp-lou-loose-dialog/fdp-lou-loose.dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fdp-lou-gg',
  templateUrl: './fdp-lou-gg.component.html',
  styleUrls: ['./fdp-lou-gg.component.scss']
})
export class FdpLouGgComponent implements OnInit, OnDestroy {

  constructor(public router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {
    // this.music.pause();
  }

}
