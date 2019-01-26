import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {ResponsiveService} from '../responsive.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() close = new EventEmitter();

  ngOnInit() {
  }

}
