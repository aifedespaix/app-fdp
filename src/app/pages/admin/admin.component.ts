import {Component, OnDestroy, OnInit} from '@angular/core';
import {LayoutService} from '../../services/layout.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(
    private readonly layoutService: LayoutService,
  ) {
    this.layoutService.footerVisibility(false);
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

}
