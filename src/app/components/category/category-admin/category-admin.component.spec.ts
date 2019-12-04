import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminComponent } from './category-admin.component';
import {TestsModule} from '../../../tests/tests.module';
import {CategoryModule} from '../category.module';

describe('CategoryAdminComponent', () => {
  let component: CategoryAdminComponent;
  let fixture: ComponentFixture<CategoryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CategoryModule,
        TestsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
