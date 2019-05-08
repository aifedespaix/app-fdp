import {
  Component,
  ElementRef,
  ViewChild,
  OnInit, Output, EventEmitter,
} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Box} from '../../box';
import {BoxService} from '../../box.service';

@Component({
  selector: 'app-box-form',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  public boxDetailsForm: FormGroup;
  public boxImportForm: FormGroup;
  public box: Box;
  public isBoxImported: boolean;

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>, private boxService: BoxService) {
    this.box = new Box();
    this.isBoxImported = false;
  }

  public ngOnInit(): void {
    this.createForms();
  }

  public createForms() {
    this.boxImportForm = new FormGroup({
      box_miniature: new FormControl(null, [Validators.required]),
      box_sound: new FormControl(null, [Validators.required]),
    });

    this.boxDetailsForm = new FormGroup({
      box_title: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      box_description: new FormControl(null, [Validators.maxLength(200)]),
    });
  }

  public closeDialog() {
    this.dialogRef.close(this.box.id ? this.box : null);
  }

  public sendBox() {
    this.box.title = this.boxDetailsForm.get('box_title').value;
    this.box.description = this.boxDetailsForm.get('box_description').value;

    //for (let i = 0; i < 200; i++) {
    this.boxService.createBox(this.box).subscribe(
      box => {
        this.box = box;
      },
      error => {
        console.log(error);
      },
    );
    //}
  }

  public importFiles(files) {
    this.box.sound = files.sound;
    this.boxImportForm.patchValue({box_miniature: this.box.sound.id});

    this.box.miniature = files.miniature;
    this.boxImportForm.patchValue({box_sound: this.box.miniature.id});

    this.isBoxImported = true;
  }
}
