import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SoundWaveComponent} from './sound-wave.component';
import {TestsModule} from '../../../tests/tests.module';
import {SoundModule} from '../sound.module';
import {getResourceMock, ResourceTypeEnum} from '../../../model/resource/tests/resource.mock';

describe('SoundWaveComponent', () => {
  let component: SoundWaveComponent;
  let fixture: ComponentFixture<SoundWaveComponent>;

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
    fixture = TestBed.createComponent(SoundWaveComponent);
    component = fixture.componentInstance;
    component.resource = getResourceMock(ResourceTypeEnum.Sound);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
