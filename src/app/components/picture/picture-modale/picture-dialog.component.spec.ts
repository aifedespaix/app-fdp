import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDialogComponent } from './picture-dialog.component';
import {MatDialogRef, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {PictureUploadComponent} from '../picture-upload/picture-upload.component';
import {LoadingModule} from '../../loading/loading.module';
import {PictureComponent} from '../picture/picture.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PipesModule} from '../../../pipes/pipes.module';

describe('PictureDialogComponent', () => {
  let component: PictureDialogComponent;
  let fixture: ComponentFixture<PictureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureDialogComponent, PictureUploadComponent, PictureComponent ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        LoadingModule,
        BrowserAnimationsModule,
        PipesModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        }
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
