import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicStreamingComponent} from './music-streaming.component';
import {MusicModule} from '../music.module';

describe('MusicStreamingComponent', () => {
  let component: MusicStreamingComponent;
  let fixture: ComponentFixture<MusicStreamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
