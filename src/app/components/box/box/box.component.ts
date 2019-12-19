import {Component, HostListener, Input, OnInit} from '@angular/core';
import {BoxType} from '../../../model/_generated/graphql.schema';
import {SoundService} from '../../../services/sound/sound.service';
import {BoxModelService} from '../../../model/box/box-model.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {

  @Input() box: BoxType;
  @Input() noTitle = false;

  constructor(
    private readonly soundService: SoundService,
    private readonly boxModelService: BoxModelService,
  ) {
  }

  @HostListener('click')
  click() {
    if (this.box.sound) {
      this.soundService.load(this.box.sound, this.box.title);
      this.soundService.play();
      this.addView();
    }
  }

  ngOnInit() {
  }

  private addView() {
    const $sub = this.boxModelService
      .addViewBox(this.box.id)
      .subscribe((box) => {
        this.box.views = box.views;
        $sub.unsubscribe();
      });
  }
}
