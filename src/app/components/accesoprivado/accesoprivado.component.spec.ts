import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoprivadoComponent } from './accesoprivado.component';

describe('AccesoprivadoComponent', () => {
  let component: AccesoprivadoComponent;
  let fixture: ComponentFixture<AccesoprivadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoprivadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoprivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
