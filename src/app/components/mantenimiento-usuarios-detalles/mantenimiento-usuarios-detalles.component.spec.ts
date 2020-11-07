import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoUsuariosDetallesComponent } from './mantenimiento-usuarios-detalles.component';

describe('MantenimientoUsuariosDetallesComponent', () => {
  let component: MantenimientoUsuariosDetallesComponent;
  let fixture: ComponentFixture<MantenimientoUsuariosDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoUsuariosDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoUsuariosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
