import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicYoutubeComponent } from './music-youtube.component';

describe('MusicYoutubeComponent', () => {
  let component: MusicYoutubeComponent;
  let fixture: ComponentFixture<MusicYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicYoutubeComponent ]
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
