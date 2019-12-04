import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComponent } from './box.component';
import {TestsModule} from '../../tests/tests.module';
import {BoxPageModule} from './box-page.module';

describe('BoxComponent', () => {
  let component: BoxComponent;
  let fixture: ComponentFixture<BoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        BoxPageModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
