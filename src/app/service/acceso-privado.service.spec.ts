import { TestBed } from '@angular/core/testing';

import { AccesoPrivadoService } from './acceso-privado.service';

describe('AccesoPrivadoService', () => {
  let service: AccesoPrivadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoPrivadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
