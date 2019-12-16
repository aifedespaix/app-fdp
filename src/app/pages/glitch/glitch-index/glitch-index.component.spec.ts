import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchIndexComponent } from './glitch-index.component';
import {GlitchModule} from '../glitch.module';
import {TestsModule} from '../../../tests/tests.module';

describe('GlitchIndexComponent', () => {
  let component: GlitchIndexComponent;
  let fixture: ComponentFixture<GlitchIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ GlitchModule, TestsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlitchIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
