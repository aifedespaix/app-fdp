import {Component, Input} from '@angular/core';
import {Box} from '../box';
import {BoxService} from '../box.service';
import {Router} from '@angular/router';
import {SoundService} from '../../../commun/sound/sound.service';

@Component({
  selector: 'app-box-element',
  templateUrl: './element.component.html',
})
export class ElementComponent {
  @Input() box: Box;
  @Input() showTitle: boolean;
  public timer;
  public prevent;

  constructor(
    private boxService: BoxService,
    private router: Router,
    private soundService: SoundService,
  ) {
    this.showTitle = true;
  }

  /**
   * todo implements
   * @param $event
   * @param id
   * @param vote
   */
  public vote($event, vote: boolean) {
    $event.stopPropagation();
    this.boxService.vote(this.box.id, vote).subscribe(
      res => {
        // if (res.box) {
        // this.onBoxSaved.emit(res.box);
        // }
        console.log(res);
      },
      error => {
        // console.log(error);
      },
    );
    console.log(vote);
  }

  /**
   * Gère le click et dbclick todo factoriser
   * @param box
   */
  // public onClickBox() {
  //   // alert();
  //   this.timer = setTimeout(() => {
  //     if (!this.prevent) {
  //       this.play();
  //     }
  //     this.prevent = false;
  //   }, 300);
  //   // Avoid navigator link moving
  //   return false;
  // }
  //
  // public onDbClickBox() {
  //   clearTimeout(this.timer);
  //   this.prevent = true;
  //   this.open();
  // }

  public play() {
    this.soundService.load(this.box.sound, this.box.title);
    this.soundService.play();
    // window.navigator.vibrate(50); // todo vibrate ?
  }

  public open() {
    this.router.navigate([`/soundBox/box`, this.box.id, this.box.title]);
  }

  public boxUrl() {
    return `/soundBox/box/${this.box.id}/${this.box.title}`;
  }
}
