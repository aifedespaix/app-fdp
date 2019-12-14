import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SoundBoxEditorComponent} from './sound-box-editor.component';
import {SoundBoxModule} from '../sound-box.module';
import {TestsModule} from '../../../tests/tests.module';

describe('BoxCreateComponent', () => {
  let component: SoundBoxEditorComponent;
  let fixture: ComponentFixture<SoundBoxEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SoundBoxModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundBoxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
