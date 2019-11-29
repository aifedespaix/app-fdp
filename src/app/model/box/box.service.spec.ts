import { TestBed } from '@angular/core/testing';

import { BoxModelService } from './box-model.service';

describe('BoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxModelService = TestBed.get(BoxModelService);
    expect(service).toBeTruthy();
  });
});
