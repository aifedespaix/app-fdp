import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownEditComponent } from './markdown-edit.component';
import {MatIconModule} from '@angular/material';
import {PictureLibraryModule} from '../../picture-library/picture-library.module';

describe('MarkdownEditComponent', () => {
  let component: MarkdownEditComponent;
  let fixture: ComponentFixture<MarkdownEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownEditComponent ],
      imports: [
        MatIconModule,
        PictureLibraryModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
