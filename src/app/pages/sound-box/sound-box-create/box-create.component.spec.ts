import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BoxCreateComponent} from './box-create.component';
import {BoxPageModule} from '../box-page.module';
import {TestsModule} from '../../../tests/tests.module';

describe('BoxCreateComponent', () => {
  let component: BoxCreateComponent;
  let fixture: ComponentFixture<BoxCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BoxPageModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
