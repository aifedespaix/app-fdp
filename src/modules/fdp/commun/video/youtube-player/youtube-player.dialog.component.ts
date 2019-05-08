import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Video} from '../video';

@Component({
  templateUrl: './youtube-player.component.html',
})
export class YoutubePlayerDialogComponent {

  constructor(public dialogRef: MatDialogRef<YoutubePlayerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Video) {
  }

  get video() {
    return this.data;
  }
}

