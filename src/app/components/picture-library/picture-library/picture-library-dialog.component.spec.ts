import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLibraryDialogComponent } from './picture-library-dialog.component';
import {PictureModelService} from '../../../model/picture/picture-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatIconModule, MatSnackBarModule, MatTabsModule} from '@angular/material';
import {PictureModule} from '../../picture/picture.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PipesModule} from '../../../pipes/pipes.module';

describe('PictureLibraryDialogComponent', () => {
  let component: PictureLibraryDialogComponent;
  let fixture: ComponentFixture<PictureLibraryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureLibraryDialogComponent ],
      imports: [
        ApolloTestingModule,
        MatTabsModule,
        MatIconModule,
        PictureModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        PipesModule,
      ],
      providers: [
        PictureModelService,
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
