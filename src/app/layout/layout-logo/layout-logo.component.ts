import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../services/layout/layout.service';

@Component({
  selector: 'app-logo',
  templateUrl: './layout-logo.component.html',
  styleUrls: ['./layout-logo.component.scss']
})
export class LayoutLogoComponent implements OnInit {

  constructor(
    public readonly layoutService: LayoutService,
  ) { }

  ngOnInit() {
  }

}
