import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BlogIndexComponent} from './blog-index.component';
import {AuthModule} from '../../../auth/auth.module';
import {SeoHeadService} from '../../../services/seo-head.service';
import {AppRoutingModule} from '../../../app-routing.module';
import {CookieService} from 'ngx-cookie-service';
import {BlogModule} from '../blog.module';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {getArticlesMock} from '../../../model/article/article.mocks';

describe('BlogComponent', () => {
  let component: BlogIndexComponent;
  let fixture: ComponentFixture<BlogIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BlogModule,
        AppRoutingModule,
        ApolloTestingModule,
        AuthModule,
      ],
      providers: [
        SeoHeadService,
        CookieService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogIndexComponent);
    component = fixture.componentInstance;
    component.articles = getArticlesMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
