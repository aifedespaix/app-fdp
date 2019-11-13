import { Component, OnInit } from '@angular/core';
import {ColorService} from '../../../../color/color.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor(
    public readonly colorService: ColorService
  ) { }

  ngOnInit() {
  }

}
