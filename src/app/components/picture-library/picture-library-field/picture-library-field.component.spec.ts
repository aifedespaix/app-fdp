import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLibraryFieldComponent } from './picture-library-field.component';
import {MatDialogModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {PictureLibraryService} from '../picture-library.service';

describe('PictureLibraryPickComponent', () => {
  let component: PictureLibraryFieldComponent;
  let fixture: ComponentFixture<PictureLibraryFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureLibraryFieldComponent ],
      imports: [
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
      ],
      providers: [
        PictureLibraryService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureLibraryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
