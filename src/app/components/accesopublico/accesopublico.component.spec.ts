import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesopublicoComponent } from './accesopublico.component';

describe('AccesopublicoComponent', () => {
  let component: AccesopublicoComponent;
  let fixture: ComponentFixture<AccesopublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesopublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesopublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
