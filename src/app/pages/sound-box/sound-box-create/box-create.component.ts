import {Component, OnInit} from '@angular/core';
import {BoxModelService} from '../../../model/box/box-model.service';
import {AudioInput, BoxInput} from '../../../model/_generated/graphql.schema';
import {Router} from '@angular/router';

@Component({
  templateUrl: './box-create.component.html',
  styleUrls: ['./box-create.component.scss'],
})
export class BoxCreateComponent implements OnInit {

  public boxInput: BoxInput;
  public sound: AudioInput;

  constructor(
    private readonly boxModelService: BoxModelService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.boxInput = new BoxInput();
  }

  createBox() {
    this.boxModelService
      .createBox(this.boxInput, this.sound)
      .subscribe((box) => {
        this.router.navigate(['..', box.id, box.title]);
      });
  }

}
