import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageComponent } from './article-page.component';
import {BlogModule} from '../blog.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('ArticlePageComponent', () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;

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
    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
