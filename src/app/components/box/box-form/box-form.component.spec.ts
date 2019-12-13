import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFormComponent } from './box-form.component';
import {TestsModule} from '../../../tests/tests.module';
import {BoxModule} from '../box.module';
import {BoxType} from '../../../model/_generated/graphql.schema';

describe('BoxFormComponent', () => {
  let component: BoxFormComponent;
  let fixture: ComponentFixture<BoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TestsModule, BoxModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFormComponent);
    component = fixture.componentInstance;
    component.elem = new BoxType();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
