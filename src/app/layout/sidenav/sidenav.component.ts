import {Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {menu} from './queries/menu.gql';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() close = new EventEmitter();
  public items;
  public activeRoute: string;

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(route => {
      this.activeRoute = (route as any).url;
    });
  }

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: menu
    })
    .valueChanges.subscribe(({data}: any) => {
        this.items = data.menu.items;
      },
      (err) => {
        console.log(err);
      });
  }
}
