import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleFormComponent} from './article-form.component';
import {BlogModule} from '../blog.module';
import {TestsModule} from '../../../tests/tests.module';

describe('ArticleFormComponent', () => {
  let component: ArticleFormComponent;
  let fixture: ComponentFixture<ArticleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BlogModule,
        TestsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
