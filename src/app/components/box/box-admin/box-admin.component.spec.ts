import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAdminComponent } from './box-admin.component';
import {BoxModule} from '../box.module';
import {TestsModule} from '../../../tests/tests.module';
import {getBoxesMock} from '../../../model/box/box.mocks';

describe('BoxAdminComponent', () => {
  let component: BoxAdminComponent;
  let fixture: ComponentFixture<BoxAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BoxModule, TestsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAdminComponent);
    component = fixture.componentInstance;
    component.boxes = getBoxesMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
