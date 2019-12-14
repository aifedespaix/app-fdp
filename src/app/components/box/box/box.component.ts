import {Component, HostListener, Input, OnInit} from '@angular/core';
import {BoxType} from '../../../model/_generated/graphql.schema';
import {SoundService} from '../../../services/sound/sound.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {

  @Input() box: BoxType;

  constructor(
    private readonly soundService: SoundService,
  ) {
  }

  @HostListener('click')
  click() {
    if (this.box.sound) {
      this.soundService.load(this.box.sound, this.box.title);
      this.soundService.play();
    }
  }

  ngOnInit() {
  }

}
