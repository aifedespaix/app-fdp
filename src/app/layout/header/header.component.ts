import {Component, EventEmitter, Output} from '@angular/core';
import {ResponsiveService} from '../responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() open = new EventEmitter();

  constructor(public responsiveService: ResponsiveService) {
  }

}
