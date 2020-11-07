import { TestBed } from '@angular/core/testing';

import { MantenimientoPerfilService } from './mantenimiento-perfil.service';

describe('MantenimientoPerfilService', () => {
  let service: MantenimientoPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantenimientoPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
