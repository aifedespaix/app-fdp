import {Component, Input, OnInit} from '@angular/core';
import {TagType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tag: TagType;

  constructor() { }

  ngOnInit() {
  }

}
