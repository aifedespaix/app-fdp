import {Component, OnInit} from '@angular/core';
import {FdpBoxService} from '../fdp-box.service';
import {FdpSoundService} from '../../fdp-sound/fdp-sound.service';
import {FdpFile} from '../../fdp-file/fdp-file';

@Component({
  selector: 'app-fdp-box-sound',
  templateUrl: './fdp-box-sound.component.html',
  styleUrls: ['./fdp-box-sound.component.scss'],
})
export class FdpBoxSoundComponent implements OnInit {

  public boxes: {}[];
  // public sound: string;

  constructor(private fdpBoxService: FdpBoxService,
              private fdpSoundService: FdpSoundService) {
    this.boxes = [];
    // this.sound = null;
  }

  ngOnInit() {
    this.fdpBoxService.boxes().subscribe(boxes => {
      this.boxes = boxes;
    }, error => {
      console.log(error);
    })
  }

  public play(sound: FdpFile) {
    // const audio = new Audio(sound.url);
    // audio.play();
    this.fdpSoundService.play(sound);
  }
}
