import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicYoutubeComponent} from './music-youtube.component';
import {MusicModule} from '../music.module';
import {AppRoutingModule} from '../../../app-routing.module';

describe('MusicYoutubeComponent', () => {
  let component: MusicYoutubeComponent;
  let fixture: ComponentFixture<MusicYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MusicModule,
        AppRoutingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
