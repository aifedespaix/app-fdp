import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminIndexComponent} from './admin-index.component';
import {AdminModule} from '../admin.module';
import {TestsModule} from '../../../tests/tests.module';

describe('AdminComponent', () => {
  let component: AdminIndexComponent;
  let fixture: ComponentFixture<AdminIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AdminModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
