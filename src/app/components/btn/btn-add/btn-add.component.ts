import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.scss']
})
export class BtnAddComponent implements OnInit {

  @Input() route: string;
  @Input() label: string;

  constructor(
    public readonly authService: AuthService,
  ) { }

  ngOnInit() {
  }

}
