import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeEmbedComponent } from './youtube-embed.component';
import {YoutubeModule} from '../youtube.module';

describe('YoutubeEmbedComponent', () => {
  let component: YoutubeEmbedComponent;
  let fixture: ComponentFixture<YoutubeEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ YoutubeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
