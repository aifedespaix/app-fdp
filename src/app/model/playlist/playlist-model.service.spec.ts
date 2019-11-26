import { TestBed } from '@angular/core/testing';

import { PlaylistModelService } from './playlist-model.service';

describe('PlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistModelService = TestBed.get(PlaylistModelService);
    expect(service).toBeTruthy();
  });
});
