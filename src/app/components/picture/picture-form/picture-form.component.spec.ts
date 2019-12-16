import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureFormComponent} from './picture-form.component';
import {PictureModule} from '../picture.module';
import {TestsModule} from '../../../tests/tests.module';

describe('PictureUploadComponent', () => {
  let component: PictureFormComponent;
  let fixture: ComponentFixture<PictureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PictureModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
