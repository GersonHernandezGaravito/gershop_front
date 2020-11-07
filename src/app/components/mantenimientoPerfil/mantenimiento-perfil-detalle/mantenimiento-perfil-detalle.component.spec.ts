import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPerfilDetalleComponent } from './mantenimiento-perfil-detalle.component';

describe('MantenimientoPerfilDetalleComponent', () => {
  let component: MantenimientoPerfilDetalleComponent;
  let fixture: ComponentFixture<MantenimientoPerfilDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoPerfilDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoPerfilDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
