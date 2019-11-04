import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasEncerradasComponent } from './partidas-encerradas.component';

describe('PartidasEncerradasComponent', () => {
  let component: PartidasEncerradasComponent;
  let fixture: ComponentFixture<PartidasEncerradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidasEncerradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasEncerradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
