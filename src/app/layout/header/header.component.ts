import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../layout.service';
import {ResponsiveService} from '../../responsive/responsive.service';
import {HeadService} from '../../seo/head.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public readonly layoutService: LayoutService,
    public readonly responsiveService: ResponsiveService,
    public readonly headService: HeadService,
  ) {
  }

  ngOnInit() {
  }

}
