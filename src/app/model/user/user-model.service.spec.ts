import {TestBed} from '@angular/core/testing';

import {UserModelService} from './user-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('UserModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      UserModelService,
    ],
  }));

  it('should be created', () => {
    const service: UserModelService = TestBed.get(UserModelService);
    expect(service).toBeTruthy();
  });
});
