import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoMenusComponent } from './mantenimiento-menus.component';

describe('MantenimientoMenusComponent', () => {
  let component: MantenimientoMenusComponent;
  let fixture: ComponentFixture<MantenimientoMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
