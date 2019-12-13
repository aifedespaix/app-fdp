import {Component, forwardRef} from '@angular/core';
import {AudioInput, ResourceType} from '../../../model/_generated/graphql.schema';
import {ISoundSlice} from '../../sound/sound-wave/sound-slice';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-resource-sound-upload',
  templateUrl: './resource-sound-upload.component.html',
  styleUrls: ['./resource-sound-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ResourceSoundUploadComponent),
      multi: true,
    },
  ],
})
export class ResourceSoundUploadComponent implements ControlValueAccessor {

  public isLoading: boolean;
  public resource: ResourceType;
  public file: File;
  public acceptedTypes: string[];

  private onChange: (newValue: AudioInput) => void;

  constructor() {
    this.acceptedTypes = ['audio/*'];
    this.isLoading = false;
    this.resource = new ResourceType();
  }

  registerOnChange(fn: (newValue: AudioInput) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  public async prepareResource({target: {validity, files: [resource]}}: any) {
    this.file = resource;

    const audio = URL.createObjectURL(resource);
    this.resource = {
      title: '',
      description: '',
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
    const audio: AudioInput = {
      file: this.file,
      slice,
      title: '',
      description: '',
    };
    this.onChange(audio);
  }
}
