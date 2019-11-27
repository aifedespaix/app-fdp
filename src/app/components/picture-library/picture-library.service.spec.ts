import { TestBed } from '@angular/core/testing';

import { PictureLibraryService } from './picture-library.service';
import {PictureModelService} from '../../model/picture/picture-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('PictureLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      PictureLibraryService,
      PictureModelService,
    ]
  }));

  it('should be created', () => {
    const service: PictureLibraryService = TestBed.get(PictureLibraryService);
    expect(service).toBeTruthy();
  });
});
