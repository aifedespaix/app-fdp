import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureLibraryPickAndPreviewComponent} from './picture-library-pick-and-preview.component';
import {TestsModule} from '../../../tests/tests.module';
import {PictureLibraryModule} from '../picture-library.module';

describe('PictureLibraryPickAndPreviewComponent', () => {
  let component: PictureLibraryPickAndPreviewComponent;
  let fixture: ComponentFixture<PictureLibraryPickAndPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PictureLibraryModule,
        TestsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureLibraryPickAndPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
