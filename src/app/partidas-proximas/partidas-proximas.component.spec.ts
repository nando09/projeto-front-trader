import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasProximasComponent } from './partidas-proximas.component';

describe('PartidasProximasComponent', () => {
  let component: PartidasProximasComponent;
  let fixture: ComponentFixture<PartidasProximasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidasProximasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasProximasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
