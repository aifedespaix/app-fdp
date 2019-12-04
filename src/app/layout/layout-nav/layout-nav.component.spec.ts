import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutNavComponent} from './layout-nav.component';
import {TestsModule} from '../../tests/tests.module';
import {LayoutModule} from '../layout.module';

describe('LayoutNavComponent', () => {
  let component: LayoutNavComponent;
  let fixture: ComponentFixture<LayoutNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
