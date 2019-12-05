import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureDialogComponent} from './picture-dialog.component';
import {MatDialogRef} from '@angular/material';
import {PictureModule} from '../picture.module';
import {TestsModule} from '../../../tests/tests.module';

describe('PictureDialogComponent', () => {
  let component: PictureDialogComponent;
  let fixture: ComponentFixture<PictureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PictureModule,
        TestsModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
