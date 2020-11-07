import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoMenusDetallesComponent } from './mantenimiento-menus-detalles.component';

describe('MantenimientoMenusDetallesComponent', () => {
  let component: MantenimientoMenusDetallesComponent;
  let fixture: ComponentFixture<MantenimientoMenusDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoMenusDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoMenusDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
