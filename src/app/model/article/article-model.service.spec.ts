import { TestBed } from '@angular/core/testing';

import { ArticleModelService } from './article-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('ArticleModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      ArticleModelService,
    ]
  }));

  it('should be created', () => {
    const service: ArticleModelService = TestBed.get(ArticleModelService);
    expect(service).toBeTruthy();
  });
});
