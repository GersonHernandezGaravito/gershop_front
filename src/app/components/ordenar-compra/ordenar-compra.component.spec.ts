import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarCompraComponent } from './ordenar-compra.component';

describe('OrdenarCompraComponent', () => {
  let component: OrdenarCompraComponent;
  let fixture: ComponentFixture<OrdenarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
