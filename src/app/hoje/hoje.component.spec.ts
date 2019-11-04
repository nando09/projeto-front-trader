import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojeComponent } from './hoje.component';

describe('HojeComponent', () => {
  let component: HojeComponent;
  let fixture: ComponentFixture<HojeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
