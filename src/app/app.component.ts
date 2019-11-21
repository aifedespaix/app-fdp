import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResponsiveService} from './responsive/responsive.service';
import {LayoutService} from './layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    public readonly responsiveService: ResponsiveService,
    public readonly layoutService: LayoutService,
  ) {
  }

  ngOnInit(): void {
  }

}
