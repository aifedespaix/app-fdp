import { Component, OnInit } from '@angular/core';
import {FdpUserAuthService} from '../fdp-user/fdp-user-auth/fdp-user-auth.service';

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
}
