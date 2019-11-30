import { TestBed } from '@angular/core/testing';

import { CategoryModelService } from './category-model.service';

describe('CategoryModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryModelService = TestBed.get(CategoryModelService);
    expect(service).toBeTruthy();
  });
});
