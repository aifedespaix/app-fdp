import {TestBed} from '@angular/core/testing';

import {ResourceService} from './resource.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('ResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      ResourceService,
    ],
  }));

  it('should be created', () => {
    const service: ResourceService = TestBed.get(ResourceService);
    expect(service).toBeTruthy();
  });
});
