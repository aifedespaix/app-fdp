import {Component, EventEmitter, Output} from '@angular/core';
import {ResponsiveService} from '../responsive.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {

  @Output() toggle = new EventEmitter();

  constructor(public responsiveService: ResponsiveService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'logo-fdp',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/fdp_logo.svg'));
  }

}
