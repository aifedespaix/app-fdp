import {TestBed} from '@angular/core/testing';

import {SnackService} from './snack.service';
import {MatSnackBarModule} from '@angular/material';

describe('SnackService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatSnackBarModule,
    ],
    providers: [
      SnackService,
    ],
  }));

  it('should be created', () => {
    const service: SnackService = TestBed.get(SnackService);
    expect(service).toBeTruthy();
  });
});
