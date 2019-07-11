import {Component, EventEmitter, Output} from '@angular/core';
import {ResponsiveService} from '../responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() openSidenav = new EventEmitter();

  constructor(public readonly responsiveService: ResponsiveService) {
  }

}
