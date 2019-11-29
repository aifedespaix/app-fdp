import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {LayoutService} from '../../services/layout.service';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        overflow: 'hidden',
        display: 'block',
      })),
      state('closed', style({
        overflow: 'hidden',
        display: 'none',
      })),
      transition('open => closed', [
        animate('.2s', style({'max-height': '0'})),
      ]),
    ]),
  ],
})
export class LayoutFooterComponent {

  constructor(
    private readonly layoutService: LayoutService,
  ) {
  }

  get isOpen() {
    return this.layoutService.isFooterVisible;
  }

  getYear() {
    return new Date().getFullYear();
  }
}
