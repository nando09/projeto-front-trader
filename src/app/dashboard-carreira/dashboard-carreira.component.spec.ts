import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCarreiraComponent } from './dashboard-carreira.component';

describe('DashboardCarreiraComponent', () => {
  let component: DashboardCarreiraComponent;
  let fixture: ComponentFixture<DashboardCarreiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCarreiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCarreiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
