import { TestBed, inject } from '@angular/core/testing';

import { PendingChangesGuard } from './pending-changes.guard';

describe('PendingChangesGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingChangesGuard]
    });
  });

  it('should ...', inject([PendingChangesGuard], (guard: PendingChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
