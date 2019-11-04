import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConquistasComponent } from './dashboard-conquistas.component';

describe('DashboardConquistasComponent', () => {
  let component: DashboardConquistasComponent;
  let fixture: ComponentFixture<DashboardConquistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConquistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConquistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
