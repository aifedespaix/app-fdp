import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLibraryPickComponent } from './picture-library-pick.component';
import {MatDialogModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {PictureLibraryService} from '../picture-library.service';

describe('PictureLibraryPickComponent', () => {
  let component: PictureLibraryPickComponent;
  let fixture: ComponentFixture<PictureLibraryPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureLibraryPickComponent ],
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
    fixture = TestBed.createComponent(PictureLibraryPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
