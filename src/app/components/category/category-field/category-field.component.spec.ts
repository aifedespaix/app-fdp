import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFieldComponent } from './category-field.component';
import {TestsModule} from '../../../tests/tests.module';
import {CategoryModule} from '../category.module';

describe('CategoryFieldComponent', () => {
  let component: CategoryFieldComponent;
  let fixture: ComponentFixture<CategoryFieldComponent>;

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
    fixture = TestBed.createComponent(CategoryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
