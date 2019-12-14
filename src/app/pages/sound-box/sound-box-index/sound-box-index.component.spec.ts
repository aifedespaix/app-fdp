import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundBoxIndexComponent } from './sound-box-index.component';
import {TestsModule} from '../../../tests/tests.module';
import {SoundBoxModule} from '../sound-box.module';

describe('BoxComponent', () => {
  let component: SoundBoxIndexComponent;
  let fixture: ComponentFixture<SoundBoxIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        SoundBoxModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundBoxIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
