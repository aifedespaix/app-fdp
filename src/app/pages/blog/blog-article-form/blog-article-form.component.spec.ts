import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogArticleFormComponent} from './blog-article-form.component';
import {BlogModule} from '../blog.module';
import {TestsModule} from '../../../tests/tests.module';

describe('ArticleFormComponent', () => {
  let component: BlogArticleFormComponent;
  let fixture: ComponentFixture<BlogArticleFormComponent>;

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
    fixture = TestBed.createComponent(BlogArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
