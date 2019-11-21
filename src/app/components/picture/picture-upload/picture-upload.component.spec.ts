import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureUploadComponent } from './picture-upload.component';
import {PictureComponent} from '../picture/picture.component';
import {PictureModelService} from '../../../model/picture/picture-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('PictureUploadComponent', () => {
  let component: PictureUploadComponent;
  let fixture: ComponentFixture<PictureUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PictureUploadComponent,
        PictureComponent,
      ],
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        PictureModelService,
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
