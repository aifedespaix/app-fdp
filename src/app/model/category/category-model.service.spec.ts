import {TestBed} from '@angular/core/testing';

import {CategoryModelService} from './category-model.service';
import {TestsModule} from '../../tests/tests.module';

describe('CategoryModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TestsModule,
    ],
    providers: [
      CategoryModelService,
    ],
  }));

  it('should be created', () => {
    const service: CategoryModelService = TestBed.get(CategoryModelService);
    expect(service).toBeTruthy();
  });
});
