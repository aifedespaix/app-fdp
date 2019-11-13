import {Component, HostBinding, OnInit} from '@angular/core';
import {ResponsiveService} from './responsive/responsive.service';
import {ColorService} from './color/color.service';
import {ThemeEnum} from './color/theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') class: ThemeEnum;
  private title: string;

  constructor(
    public readonly responsiveService: ResponsiveService,
    public readonly colorService: ColorService,
  ) {
  }

  ngOnInit(): void {
    this.colorService.theme.subscribe((theme) => {
      this.class = theme;
    });
    this.colorService.setThemeLight();
  }

}
