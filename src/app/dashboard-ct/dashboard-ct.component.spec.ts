import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCTComponent } from './dashboard-ct.component';

describe('DashboardCTComponent', () => {
  let component: DashboardCTComponent;
  let fixture: ComponentFixture<DashboardCTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
