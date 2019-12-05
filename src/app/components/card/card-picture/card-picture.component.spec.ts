import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPictureComponent } from './card-picture.component';
import {CardModule} from '../card.module';
import {getPictureMock} from '../../../model/picture/picture.mocks';

describe('CardPictureComponent', () => {
  let component: CardPictureComponent;
  let fixture: ComponentFixture<CardPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPictureComponent);
    component = fixture.componentInstance;
    component.picture = getPictureMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
