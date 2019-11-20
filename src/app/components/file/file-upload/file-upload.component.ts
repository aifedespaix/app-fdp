import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ResourceService} from '../../../model/resource/resource.service';
import {ResourceInput, ResourceType} from '../../../model/graphql.schema';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {

  public isLoading: boolean;
  public readonly resourceInput: ResourceInput;
  private file: File;
  @Input() private fileTypes: string[];

  constructor(
    private readonly resourceService: ResourceService,
  ) {
    this.isLoading = false;
    this.resourceInput = new ResourceInput();
    this.resourceInput.description = 'Description exemple';
    this.resourceInput.title = 'Titre exemple';
    this._resourceType = new ResourceType();
    this.fileTypes = [];
    this._error = '';
  }

  private _resourceType: ResourceType;

  get resourceType(): ResourceType {
    return this._resourceType;
  }

  private _error: string;

  get error(): string {
    return this._error;
  }

  public onFileChange({target: {validity, files: [file]}}: any) {
    this.file = file;
  }

  public uploadFile() {
    this.isLoading = true;
    const fileSub = this.resourceService.createResource(this.resourceInput, this.file)
      .subscribe((res) => {
          console.log(res);
          this._resourceType = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.isLoading = false;
          fileSub.unsubscribe();
        });
  }

  public acceptedMimes() {
    return this.fileTypes.join();
  }

  public isImage() {
    return /image\/.*/.exec(this.fileTypes.join());
  }

}
