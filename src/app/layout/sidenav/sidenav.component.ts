import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() close = new EventEmitter();
  constructor(private apollo: Apollo) {}
  public items;

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
        {
          menu(where: {name: "main"}) {
            id
            name
            items {
              name
              routerLink
            }
          }
        }
      `,
    })
    .valueChanges.subscribe(({data}: any) => {
      console.log(data);
      this.items = data.menu.items;
      console.log(this.items);
    });
  }
}
