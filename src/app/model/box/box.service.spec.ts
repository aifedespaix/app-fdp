import {TestBed} from '@angular/core/testing';

import {BoxModelService} from './box-model.service';
import {TestsModule} from '../../tests/tests.module';

describe('BoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TestsModule,
    ],
    providers: [
      BoxModelService,
    ],
  }));

  it('should be created', () => {
    const service: BoxModelService = TestBed.get(BoxModelService);
    expect(service).toBeTruthy();
  });
});
