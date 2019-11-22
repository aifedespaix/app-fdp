import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLibraryDialogComponent } from './picture-library-dialog.component';

describe('PictureLibraryComponent', () => {
  let component: PictureLibraryDialogComponent;
  let fixture: ComponentFixture<PictureLibraryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureLibraryDialogComponent ]
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
