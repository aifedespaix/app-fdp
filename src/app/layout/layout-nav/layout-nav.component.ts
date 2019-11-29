import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ResponsiveService} from '../../responsive/responsive.service';
import {LayoutService} from '../../services/layout.service';

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss'],
})
export class LayoutNavComponent implements OnInit {

  public readonly routes: {
    icon: string,
    name: string,
    url: string,
    index: number
  }[];

  constructor(
    private readonly router: Router,
    public readonly responsiveService: ResponsiveService,
    public readonly layoutService: LayoutService,
  ) {
    this.routes = [];
  }

  ngOnInit() {
    this.setRoutes();
  }

  private setRoutes() {
    for (const route of this.router.config) {
      if (route.data && route.data.main) {
        this.routes.push({
          icon: route.data.icon,
          name: route.data.name,
          url: route.path,
          index: route.data.index ? route.data.index : 99999,
        });
      }
    }
    this.routes.sort((routeA, routeB) => routeA.index - routeB.index);
  }

}
