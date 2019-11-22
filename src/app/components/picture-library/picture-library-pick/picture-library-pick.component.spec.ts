import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureLibraryPickComponent } from './picture-library-pick.component';

describe('PictureLibraryPickComponent', () => {
  let component: PictureLibraryPickComponent;
  let fixture: ComponentFixture<PictureLibraryPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureLibraryPickComponent ]
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
