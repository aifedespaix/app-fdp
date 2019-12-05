import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import {getArticleMock} from '../../../model/article/article.mocks';
import {ArticleModule} from '../article.module';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {CookieService} from 'ngx-cookie-service';
import {AuthModule} from '../../../auth/auth.module';
import {AppRoutingModule} from '../../../app-routing.module';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ArticleModule,
        ApolloTestingModule,
        AuthModule,
        AppRoutingModule,
      ],
      providers: [
        CookieService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = getArticleMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
