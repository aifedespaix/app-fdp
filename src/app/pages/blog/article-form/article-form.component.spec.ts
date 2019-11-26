import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormComponent } from './article-form.component';
import {ArticleComponent} from '../../../components/article/article/article.component';
import {MatFormFieldControl, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MarkdownModule} from '../../../components/markdown/markdown.module';
import {TagModule} from '../../../components/tag/tag.module';
import {PictureModule} from '../../../components/picture/picture.module';
import {MarkdownModule as NgxMarkdownModule} from 'ngx-markdown';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ArticleFormComponent', () => {
  let component: ArticleFormComponent;
  let fixture: ComponentFixture<ArticleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleFormComponent,
        ArticleComponent,
      ],
      imports: [
        MarkdownModule,
        NgxMarkdownModule.forChild(),
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        TagModule,
        PictureModule,
        ApolloTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [

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
