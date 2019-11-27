import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureUploadComponent } from './picture-upload.component';
import {PictureModule} from '../picture.module';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('PictureUploadComponent', () => {
  let component: PictureUploadComponent;
  let fixture: ComponentFixture<PictureUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PictureModule,
        ApolloTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
