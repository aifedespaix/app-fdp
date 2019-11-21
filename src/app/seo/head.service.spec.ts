import { TestBed } from '@angular/core/testing';

import { HeadService } from './head.service';
import {AppRoutingModule} from '../app-routing.module';

describe('HeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppRoutingModule,
    ],
    providers: [
      HeadService,
    ]
  }));

  it('should be created', () => {
    const service: HeadService = TestBed.get(HeadService);
    expect(service).toBeTruthy();
  });
});
