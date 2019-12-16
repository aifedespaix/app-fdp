import {Component, OnInit} from '@angular/core';
import {BoxType} from '../../../model/_generated/graphql.schema';
import {Router} from '@angular/router';

@Component({
  templateUrl: './sound-box-editor.component.html',
  styleUrls: ['./sound-box-editor.component.scss'],
})
export class SoundBoxEditorComponent implements OnInit {

  public box: BoxType;

  constructor(
    public readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.box = new BoxType();
  }

}
