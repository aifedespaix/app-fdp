import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SoundPlayerComponent} from './sound-player.component';
import {TestsModule} from '../../../tests/tests.module';
import {SoundModule} from '../sound.module';

describe('SoundPlayerComponent', () => {
  let component: SoundPlayerComponent;
  let fixture: ComponentFixture<SoundPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SoundModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
