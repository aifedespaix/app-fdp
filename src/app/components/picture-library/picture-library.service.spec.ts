import { TestBed } from '@angular/core/testing';

import { PictureLibraryService } from './picture-library.service';

describe('PictureLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PictureLibraryService = TestBed.get(PictureLibraryService);
    expect(service).toBeTruthy();
  });
});
