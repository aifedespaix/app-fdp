import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdpMusicComponent } from './fdp-music.component';

describe('FdpNigmeComponent', () => {
  let component: FdpMusicComponent;
  let fixture: ComponentFixture<FdpMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdpMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdpMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
