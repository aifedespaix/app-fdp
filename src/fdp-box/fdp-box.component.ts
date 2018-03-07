import { Component, OnInit } from '@angular/core';
import {FdpUserAuthService} from '../fdp-user/fdp-user-auth/fdp-user-auth.service';
import {FdpBox} from './fdp-box';

@Component({
  selector: 'app-fdp-box',
  templateUrl: './fdp-box.component.html',
  styleUrls: ['./fdp-box.component.scss']
})
export class FdpBoxComponent implements OnInit {

  constructor(private fdpUserAuthService: FdpUserAuthService) { }

  ngOnInit() {}

  public isLoged() {
    return this.fdpUserAuthService.isLoged;
  }

  public addBox(box: FdpBox) {
    console.log('ICI YA DLA BOX');
    console.log(box);
  }
}
