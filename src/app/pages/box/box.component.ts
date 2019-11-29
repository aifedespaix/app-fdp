import {Component, OnInit} from '@angular/core';
import {BoxType} from '../../model/_generated/graphql.schema';
import {BoxModelService} from '../../model/box/box-model.service';
import {getBoxesMock} from '../../model/box/tests/box.mocks';
import {SoundService} from '../../components/sound/sound.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {

  public isLoading: boolean;
  public boxes: BoxType[];

  constructor(
    private readonly boxService: BoxModelService,
    private readonly soundService: SoundService,
    private readonly authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.boxService.boxes({first: 20})
      .subscribe((boxes) => {
          this.boxes = boxes;
          this.boxes = getBoxesMock();
          this.isLoading = false;
        },
        (e) => {
          this.isLoading = false;
        },
      );
  }

  public play(box: BoxType) {
    this.soundService.load(box.sound, box.title);
    this.soundService.play();
  }
}
