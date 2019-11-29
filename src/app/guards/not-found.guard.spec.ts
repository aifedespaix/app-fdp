import { TestBed, async, inject } from '@angular/core/testing';

import { NotFoundGuard } from './not-found.guard';
import {AppRoutingModule} from '../app-routing.module';

describe('NotFoundGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      providers: [NotFoundGuard]
    });
  });

  it('should ...', inject([NotFoundGuard], (guard: NotFoundGuard) => {
    expect(guard).toBeTruthy();
  }));
});
