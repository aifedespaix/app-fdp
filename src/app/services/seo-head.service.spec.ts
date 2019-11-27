import { TestBed } from '@angular/core/testing';

import { SeoHeadService } from './seo-head.service';
import {AppRoutingModule} from '../app-routing.module';

describe('HeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppRoutingModule,
    ],
    providers: [
      SeoHeadService,
    ]
  }));

  it('should be created', () => {
    const service: SeoHeadService = TestBed.get(SeoHeadService);
    expect(service).toBeTruthy();
  });
});
