import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormComponent } from './category-form.component';
import {TestsModule} from '../../../tests/tests.module';
import {CategoryModule} from '../category.module';

describe('CategoryFormComponent', () => {
  let component: CategoryFormComponent;
  let fixture: ComponentFixture<CategoryFormComponent>;

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
    fixture = TestBed.createComponent(CategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});