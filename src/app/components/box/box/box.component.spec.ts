import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComponent } from './box.component';
import {BoxModule} from '../box.module';
import {TestsModule} from '../../../tests/tests.module';
import {getBoxMock} from '../../../model/box/box.mocks';

describe('BoxComponent', () => {
  let component: BoxComponent;
  let fixture: ComponentFixture<BoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BoxModule, TestsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    component.box = getBoxMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
