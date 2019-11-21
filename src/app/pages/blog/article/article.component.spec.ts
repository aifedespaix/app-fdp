import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import {PictureModule} from '../../../components/picture/picture.module';
import {MarkdownModule} from '../../../components/markdown/markdown.module';
import {MatIconModule} from '@angular/material';
import {getArticleMock} from '../../../model/article/tests/article.mocks';
import {MarkdownModule as NgxMarkdownModule} from 'ngx-markdown';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [
        MarkdownModule,
        NgxMarkdownModule.forChild(),
        PictureModule,
        MarkdownModule,
        MatIconModule,
      ],
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
