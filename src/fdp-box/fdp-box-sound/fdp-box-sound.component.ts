import {Component, OnInit} from '@angular/core';
import {FdpBoxService} from '../fdp-box.service';

@Component({
  selector: 'app-fdp-box-sound',
  templateUrl: './fdp-box-sound.component.html',
  styleUrls: ['./fdp-box-sound.component.scss'],
})
export class FdpBoxSoundComponent implements OnInit {

  public boxes: {}[];
  public sound: string;

  constructor(private fdpBoxService: FdpBoxService) {
    this.boxes = [];
    this.sound = null;
  }

  ngOnInit() {
    this.fdpBoxService.boxes().subscribe(boxes => {
      this.boxes = boxes;
    }, error => {
      console.log(error);
    })
  }

  public play(sound) {
    const audio = new Audio(sound.url);
    audio.play();
  }
}
