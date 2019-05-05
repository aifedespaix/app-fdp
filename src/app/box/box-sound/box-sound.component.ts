import {Component, Input} from '@angular/core';
import {BoxService} from '../box.service';
import {Box} from '../../graphql.schema';
import {SoundService} from '../../sound/sound.service';

@Component({
  selector: 'app-box-sound',
  templateUrl: './box-sound.component.html',
  styleUrls: ['./box-sound.component.scss'],
})
export class BoxSoundComponent {

  @Input() public box: Box;

  constructor(
    private boxService: BoxService,
    private soundService: SoundService
  ) {
    this.box = new Box();
  }

  public play() {
    this.soundService.play(this.box.sound);
  }

  public vote($event, id, vote: boolean) {
    $event.stopPropagation();
    // this.boxService.vote(id, vote).subscribe(res => {
    //     // if (res.box) {
    //     // this.onBoxSaved.emit(res.box);
    //     // }
    //     console.log(res);
    //   }, error => {
    //     // console.log(error);
    //   },
    // );
    console.log(vote);
  }
}
