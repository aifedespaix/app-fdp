import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAdminComponent } from './article-admin.component';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {MatCheckboxModule, MatTableModule} from '@angular/material';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('ArticleAdminComponent', () => {
  let component: ArticleAdminComponent;
  let fixture: ComponentFixture<ArticleAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAdminComponent ],
      imports: [
        MatCheckboxModule,
        MatTableModule,
        ApolloTestingModule,
      ],
      providers: [
        ArticleModelService,
      ]
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
