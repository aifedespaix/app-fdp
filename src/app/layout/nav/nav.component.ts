import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ResponsiveService} from '../../responsive/responsive.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  public readonly routes: {
    icon: string,
    name: string,
    url: string,
    index: number
  }[];

  constructor(
    private readonly router: Router,
    public readonly responsiveService: ResponsiveService,
  ) {
    this.routes = [];
  }

  ngOnInit() {
    this.setRoutes();
  }

  private setRoutes() {
    for (const route of this.router.config) {
      if (route.data) {
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
