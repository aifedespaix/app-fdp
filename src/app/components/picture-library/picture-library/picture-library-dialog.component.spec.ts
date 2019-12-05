import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureLibraryDialogComponent} from './picture-library-dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PictureLibraryModule} from '../picture-library.module';
import {TestsModule} from '../../../tests/tests.module';

describe('PictureLibraryDialogComponent', () => {
  let component: PictureLibraryDialogComponent;
  let fixture: ComponentFixture<PictureLibraryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PictureLibraryModule,
        TestsModule,
      ],
      providers: [
        [{
          provide: MatDialogRef,
          useValue: {},
        }],
        [{
          provide: MAT_DIALOG_DATA,
          useValue: {},
        }],
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureLibraryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
