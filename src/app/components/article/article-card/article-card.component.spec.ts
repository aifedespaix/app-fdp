import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardComponent } from './article-card.component';
import {PictureModule} from '../../picture/picture.module';
import {CardModule} from '../../card/card.module';
import {TagModule} from '../../tag/tag.module';
import {getArticleMock} from '../../../model/article/tests/article.mocks';
import {PipesModule} from '../../../pipes/pipes.module';
import {ArticleModule} from '../article.module';

describe('ArticleCardComponent', () => {
  let component: ArticleCardComponent;
  let fixture: ComponentFixture<ArticleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ArticleModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardComponent);
    component = fixture.componentInstance;
    component.article = getArticleMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
