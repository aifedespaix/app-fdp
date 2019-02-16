import {Component, EventEmitter, Output} from '@angular/core';
import {ResponsiveService} from '../responsive.service';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() open = new EventEmitter();

  constructor(public responsiveService: ResponsiveService, public userService: UserService) {
  }

}
