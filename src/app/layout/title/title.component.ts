import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResponsiveService} from '../responsive.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Output() toggle = new EventEmitter();

  constructor(public responsiveService: ResponsiveService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'logo-fdp',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/fdp_logo.svg'));
  }

}
