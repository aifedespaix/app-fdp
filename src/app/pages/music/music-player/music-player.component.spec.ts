import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicPlayerComponent} from './music-player.component';
import {MusicModule} from '../music.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('MusicPlayerComponent', () => {
  let component: MusicPlayerComponent;
  let fixture: ComponentFixture<MusicPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          MusicModule,
          AppRoutingModule,
        ],
        providers: [{
          provide: ActivatedRoute,
          useValue: {
            snapshot: {data: {playlist: 'test'}},
          },
        },
        ],
      },
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
