import { TestBed } from '@angular/core/testing';

import { MantenimientoMenuService } from './mantenimiento-menu.service';

describe('MantenimientoMenuService', () => {
  let service: MantenimientoMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantenimientoMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
