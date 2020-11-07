import { TestBed } from '@angular/core/testing';

import { ManejarTokenService } from './manejar-token.service';

describe('ManejarTokenService', () => {
  let service: ManejarTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejarTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
