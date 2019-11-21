import { TestBed } from '@angular/core/testing';

import { TagModelService } from './tag-model.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('TagModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloTestingModule,
    ],
    providers: [
      TagModelService,
    ]}));

  it('should be created', () => {
    const service: TagModelService = TestBed.get(TagModelService);
    expect(service).toBeTruthy();
  });
});
