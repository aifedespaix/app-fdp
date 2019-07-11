import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundImportYoutubeComponent } from './sound-import-youtube.component';

describe('SoundImportYoutubeComponent', () => {
  let component: SoundImportYoutubeComponent;
  let fixture: ComponentFixture<SoundImportYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundImportYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundImportYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
