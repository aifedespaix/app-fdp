import {Component, Input} from '@angular/core';
import {Box} from '../../../graphql.schema';

@Component({
  selector: 'app-box-sound',
  templateUrl: './box-sound.component.html',
  styleUrls: ['./box-sound.component.scss'],
})
export class BoxSoundComponent {

  @Input() public box: Box;

  constructor(
  ) {
    this.box = new Box();
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
