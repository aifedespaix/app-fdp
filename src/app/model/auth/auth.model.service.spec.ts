import { TestBed } from '@angular/core/testing';

import { Auth.ModelService } from './auth.model.service';

describe('Auth.ModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.ModelService = TestBed.get(Auth.ModelService);
    expect(service).toBeTruthy();
  });
});
