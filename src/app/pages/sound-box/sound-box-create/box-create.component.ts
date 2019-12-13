import {Component, OnInit} from '@angular/core';
import {BoxType} from '../../../model/_generated/graphql.schema';
import {Router} from '@angular/router';

@Component({
  templateUrl: './box-create.component.html',
  styleUrls: ['./box-create.component.scss'],
})
export class BoxCreateComponent implements OnInit {

  public box: BoxType;

  constructor(
    public readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.box = new BoxType();
  }

  test($event: Event) {
    console.log('$event');
    console.log($event);
  }
}
