import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube.service';
import {TestsModule} from '../../tests/tests.module';

describe('YoutubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestsModule]
  }));

  it('should be created', () => {
    const service: YoutubeService = TestBed.get(YoutubeService);
    expect(service).toBeTruthy();
  });
});
