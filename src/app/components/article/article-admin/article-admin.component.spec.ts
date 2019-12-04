import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAdminComponent } from './article-admin.component';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {MatCheckboxModule, MatTableModule} from '@angular/material';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {ArticleModule} from '../article.module';

describe('ArticleAdminComponent', () => {
  let component: ArticleAdminComponent;
  let fixture: ComponentFixture<ArticleAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ArticleModule,
        ApolloTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
