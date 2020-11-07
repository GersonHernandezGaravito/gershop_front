import { TestBed } from '@angular/core/testing';

import { MantenimientoUsuariosService } from './mantenimiento-usuarios.service';

describe('MantenimientoUsuariosService', () => {
  let service: MantenimientoUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantenimientoUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
