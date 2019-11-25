import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetfairLoginComponent } from './betfair-login.component';

describe('BetfairLoginComponent', () => {
  let component: BetfairLoginComponent;
  let fixture: ComponentFixture<BetfairLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetfairLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetfairLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
