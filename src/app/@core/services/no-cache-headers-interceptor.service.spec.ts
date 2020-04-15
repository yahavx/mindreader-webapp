import { TestBed } from '@angular/core/testing';

import { NoCacheHeadersInterceptorService } from './no-cache-headers-interceptor.service';

describe('NoCacheHeadersInterceptorService', () => {
  let service: NoCacheHeadersInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoCacheHeadersInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
