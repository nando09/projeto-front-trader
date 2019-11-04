import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBancaComponent } from './dashboard-banca.component';

describe('DashboardBancaComponent', () => {
  let component: DashboardBancaComponent;
  let fixture: ComponentFixture<DashboardBancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
