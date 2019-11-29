import {TestBed} from '@angular/core/testing';

import {ResourceModelService} from './resource-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('ResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      ResourceModelService,
    ],
  }));

  it('should be created', () => {
    const service: ResourceModelService = TestBed.get(ResourceModelService);
    expect(service).toBeTruthy();
  });
});
