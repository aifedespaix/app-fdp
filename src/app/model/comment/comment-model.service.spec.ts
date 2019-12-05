import {TestBed} from '@angular/core/testing';

import {CommentModelService} from './comment-model.service';
import {TestsModule} from '../../tests/tests.module';

describe('CommentModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TestsModule,
    ],
    providers: [
      CommentModelService,
    ],
  }));

  it('should be created', () => {
    const service: CommentModelService = TestBed.get(CommentModelService);
    expect(service).toBeTruthy();
  });
});
