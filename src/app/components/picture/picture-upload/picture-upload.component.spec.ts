import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureUploadComponent} from './picture-upload.component';
import {PictureModule} from '../picture.module';
import {TestsModule} from '../../../tests/tests.module';

describe('PictureUploadComponent', () => {
  let component: PictureUploadComponent;
  let fixture: ComponentFixture<PictureUploadComponent>;

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
    fixture = TestBed.createComponent(PictureUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
