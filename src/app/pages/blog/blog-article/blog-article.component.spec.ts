import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleComponent } from './blog-article.component';
import {BlogModule} from '../blog.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('BlogArticleComponent', () => {
  let component: BlogArticleComponent;
  let fixture: ComponentFixture<BlogArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BlogModule,
        AppRoutingModule,
        ApolloTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
