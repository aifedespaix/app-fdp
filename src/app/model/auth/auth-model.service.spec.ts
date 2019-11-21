import { TestBed } from '@angular/core/testing';

import { AuthModelService } from './auth-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('Auth.ModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      AuthModelService,
    ]
  }));

  it('should be created', () => {
    const service: AuthModelService = TestBed.get(AuthModelService);
    expect(service).toBeTruthy();
  });
});
