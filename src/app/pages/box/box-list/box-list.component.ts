import {Component, OnDestroy, OnInit} from '@angular/core';
import {Box} from '../../../graphql.schema';
import {ApolloQueryResult} from 'apollo-client';
import {Subscription} from 'rxjs';
import {BoxService} from '../box.service';
import {SoundService} from '../../../fdp/sound/sound.service';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent implements OnInit, OnDestroy {

  private boxesSub: Subscription;
  public boxes: Box[];

  constructor(
    private readonly boxService: BoxService,
    private readonly soundService: SoundService,
  ) {
    this.boxes = [];
  }

  ngOnInit() {
    this.boxesSub = this.boxService.getBoxes().subscribe(({data}: ApolloQueryResult<{ boxes: Box[] }>) => {
        console.log(data);
        this.boxes = data.boxes;
      }, (e) => {
        this.boxesSub.unsubscribe();
        console.log(e);
      },
      () => {
        // profileSub.unsubscribe();
      },
    );
  }

  ngOnDestroy(): void {
    this.boxesSub.unsubscribe();
  }

  public play(box: Box) {
    this.soundService.load(box.sound, box.name);
    this.soundService.play();
  }

  public boxUrl(box: Box) {
      return `/box/${box.id}/${box.name}`;
  }
}
