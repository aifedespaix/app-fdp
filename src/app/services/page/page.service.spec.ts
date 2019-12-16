import { TestBed } from '@angular/core/testing';

import { PageService } from './page.service';
import {TestsModule} from '../../tests/tests.module';

describe('PageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestsModule]
  }));

  it('should be created', () => {
    const service: PageService = TestBed.get(PageService);
    expect(service).toBeTruthy();
  });
});
