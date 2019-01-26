import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResponsiveService} from '../responsive.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Output() toggle = new EventEmitter();

  constructor(public responsiveService: ResponsiveService) { }

}
