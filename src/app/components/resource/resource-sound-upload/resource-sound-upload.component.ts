import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AudioInput, ResourceType} from '../../../model/_generated/graphql.schema';
import {ISoundSlice} from '../../sound/sound-wave/sound-slice';

@Component({
  selector: 'app-resource-sound-upload',
  templateUrl: './resource-sound-upload.component.html',
  styleUrls: ['./resource-sound-upload.component.scss'],
})
export class ResourceSoundUploadComponent {

  public isLoading: boolean;
  public resource: ResourceType;
  public file: File;

  public acceptedTypes: string[];
  @Input() public title: string;
  @Input() public description: string;

  @Output() private resourceLoaded: EventEmitter<AudioInput>;

  constructor() {
    this.acceptedTypes = ['audio/mp3'];
    this.isLoading = false;
    this.resource = new ResourceType();
    this.resourceLoaded = new EventEmitter<AudioInput>();
  }

  public async uploadResource({target: {validity, files: [resource]}}: any) {
    this.file = resource;

    const audio = URL.createObjectURL(resource);
    this.resource = {
      description: this.description,
      title: this.title,
      url: audio,
      id: 'loading',
      updatedAt: null,
      createdAt: null,
      author: null,
    };
  }

  public acceptedMimes() {
    return this.acceptedTypes.join();
  }

  emitFile(slice: ISoundSlice) {
    this.resourceLoaded.emit({
      file: this.file,
      slice,
      title: this.title,
      description: this.description,
    });
  }
}
