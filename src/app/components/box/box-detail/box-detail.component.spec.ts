import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BoxDetailComponent} from './box-detail.component';
import {BoxModule} from '../box.module';
import {TestsModule} from '../../../tests/tests.module';
import {getBoxMock} from '../../../model/box/box.mocks';

describe('BoxDetailComponent', () => {
  let component: BoxDetailComponent;
  let fixture: ComponentFixture<BoxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BoxModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDetailComponent);
    component = fixture.componentInstance;
    component.box = getBoxMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
