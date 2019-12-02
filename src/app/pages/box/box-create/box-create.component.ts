import {Component, OnInit} from '@angular/core';
import {BoxModelService} from '../../../model/box/box-model.service';
import {AudioInput, BoxInput} from '../../../model/_generated/graphql.schema';
import {Router} from '@angular/router';
import {ResourceModelService} from '../../../model/resource/resource-model.service';

@Component({
  selector: 'app-box-create',
  templateUrl: './box-create.component.html',
  styleUrls: ['./box-create.component.scss'],
})
export class BoxCreateComponent implements OnInit {

  public boxInput: BoxInput;

  constructor(
    private readonly boxModelService: BoxModelService,
    private readonly router: Router,
    private readonly resourceService: ResourceModelService,
  ) {
  }

  ngOnInit() {
    this.boxInput = new BoxInput();
  }

  createBox() {
    this.boxModelService
      .createBox(this.boxInput)
      .subscribe((box) => {
        this.router.navigate(['..', box.id, box.title]);
      });
  }

  setAudio(audio: AudioInput) {
    this.resourceService.createResourceAudio(audio)
      .subscribe((r) => {
        console.log(r);
      });
  }
}
