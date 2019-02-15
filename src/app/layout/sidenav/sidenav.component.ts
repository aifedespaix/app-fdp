import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() close = new EventEmitter();
  public items;
  public activeRoute: string;

  constructor(private apollo: Apollo, private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(route => {
      this.activeRoute = (route as any).url;
    });
  }

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
        {
          menu(name: "main") {
            id
            name
            items {
              name
              routerLink
              icon
            }
          }
        }
      `
    })
    .valueChanges.subscribe(({data}: any) => {
      this.items = data.menu.items;
    });
  }
}
