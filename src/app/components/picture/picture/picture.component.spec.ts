import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureComponent } from './picture.component';
import {getPictureMock} from '../../../model/picture/tests/picture.mocks';

describe('PictureComponent', () => {
  let component: PictureComponent;
  let fixture: ComponentFixture<PictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureComponent);
    component = fixture.componentInstance;
    component.picture = getPictureMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
