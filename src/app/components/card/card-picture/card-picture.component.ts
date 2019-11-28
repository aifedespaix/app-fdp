import {Component, Input, OnInit} from '@angular/core';
import {PictureType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-card-picture',
  templateUrl: './card-picture.component.html',
  styleUrls: ['./card-picture.component.scss']
})
export class CardPictureComponent implements OnInit {

  @Input() picture: PictureType;

  constructor() { }

  ngOnInit() {
  }

}
