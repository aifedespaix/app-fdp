import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleListComponent} from './article-list.component';
import {getArticlesMock} from '../../../model/article/article.mocks';
import {ArticleCardComponent} from '../article-card/article-card.component';
import {CardModule} from '../../card/card.module';
import {PictureModule} from '../../picture/picture.module';
import {TagModule} from '../../tag/tag.module';
import {AppRoutingModule} from '../../../app-routing.module';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleListComponent, ArticleCardComponent],
      imports: [
        CardModule,
        PictureModule,
        TagModule,
        AppRoutingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    component.articles = getArticlesMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
