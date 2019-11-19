import { TestBed } from '@angular/core/testing';

import { ArticleModelService } from './article-model.service';

describe('ArticleModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleModelService = TestBed.get(ArticleModelService);
    expect(service).toBeTruthy();
  });
});
