import { TestBed } from '@angular/core/testing';

import { PlaylistModelService } from './playlist-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('PlaylistModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      PlaylistModelService,
    ],
  }));

  it('should be created', () => {
    const service: PlaylistModelService = TestBed.get(PlaylistModelService);
    expect(service).toBeTruthy();
  });
});
