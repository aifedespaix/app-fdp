import {Component, OnInit} from '@angular/core';
import {FdpBoxService} from '../fdp-box.service';
import {FdpSoundService} from '../../fdp-sound/fdp-sound.service';
import {FdpFile} from '../../fdp-file/fdp-file';
import {FdpBox} from '../fdp-box';

@Component({
  selector: 'app-fdp-box-sound',
  templateUrl: './fdp-box-sound.component.html',
  styleUrls: ['./fdp-box-sound.component.scss'],
})
export class FdpBoxSoundComponent implements OnInit {

  public boxes: FdpBox[];

  constructor(private fdpBoxService: FdpBoxService,
              private fdpSoundService: FdpSoundService) {
    this.boxes = [];
  }

  ngOnInit() {
    this.fdpBoxService.boxes().subscribe(boxes => {
      this.boxes = boxes;
    }, error => {
      console.log(error);
    })
  }

  public play(sound: FdpFile) {
    this.fdpSoundService.play(sound);
  }

  public vote($event, id, vote: boolean) {
    $event.stopPropagation();
    this.fdpBoxService.vote(id, vote).subscribe(res => {
        // if (res.box) {
          // this.onBoxSaved.emit(res.box);
        // }
      console.log(res);
      }, error => {
        // console.log(error);
      },
    );
    console.log(vote);
  }
}
