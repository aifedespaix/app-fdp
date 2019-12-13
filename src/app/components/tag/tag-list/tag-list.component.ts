import {Component, Input, OnInit} from '@angular/core';
import {TagType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  @Input() tags: TagType[];

  constructor() {
    this.tags = [];
  }

  ngOnInit() {
  }

}
