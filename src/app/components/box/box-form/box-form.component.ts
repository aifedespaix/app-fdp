import {Component, OnInit} from '@angular/core';
import {BoxModelService} from '../../../model/box/box-model.service';
import {AudioInput, BoxInput, BoxType} from '../../../model/_generated/graphql.schema';
import {Form} from '../../../abstract/form.abstract';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss'],
})
export class BoxFormComponent extends Form<BoxType> implements OnInit {

  public audioInput: AudioInput;
  public isSaved: boolean;

  constructor(
    private readonly boxModelService: BoxModelService,
  ) {
    super();
    this.isSaved = false;
  }

  ngOnInit() {
  }

  thumbnailUpdated() {
    if (!this.elem.title) {
      this.elem.title = this.elem.thumbnail.title;
    }
    if (!this.elem.description) {
      this.elem.description = this.elem.thumbnail.description;
    }
  }

  public getSaveLabel(): string {
    return this.elem.id ? 'Éditer la box' : 'Enregistrer la box';
  }

  protected getInput(): BoxInput {
    return {
      title: this.elem.title,
      description: this.elem.description,
      tags: this.elem.tags,
      thumbnailId: this.elem.thumbnail.id,
    };
  }

  protected update() {
    this.boxModelService
      .update({...this.getInput(), id: this.elem.id})
      .subscribe((box) => {
        this.newElem.emit(box);
      });
  }

  protected create() {
    this.audioInput.title = this.elem.title;
    this.audioInput.description = this.elem.description;
    this.boxModelService
      .createBox(this.getInput(), this.audioInput)
      .subscribe((box) => {
        this.newElem.emit(box);
      });
  }

}
