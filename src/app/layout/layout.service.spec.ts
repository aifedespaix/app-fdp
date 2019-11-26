import { TestBed } from '@angular/core/testing';

import { LayoutService } from '../services/layout.service';
import {ResponsiveService} from '../responsive/responsive.service';

describe('LayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResponsiveService,
      LayoutService,
    ],
  }));

  it('should be created', () => {
    const service: LayoutService = TestBed.get(LayoutService);
    expect(service).toBeTruthy();
  });
});
