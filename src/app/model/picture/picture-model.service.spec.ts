import {TestBed} from '@angular/core/testing';

import {PictureModelService} from './picture-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('PictureModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      PictureModelService,
    ],
  }));

  it('should be created', () => {
    const service: PictureModelService = TestBed.get(PictureModelService);
    expect(service).toBeTruthy();
  });
});
