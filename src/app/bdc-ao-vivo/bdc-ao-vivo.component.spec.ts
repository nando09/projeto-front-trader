import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdcAoVivoComponent } from './bdc-ao-vivo.component';

describe('BdcAoVivoComponent', () => {
  let component: BdcAoVivoComponent;
  let fixture: ComponentFixture<BdcAoVivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdcAoVivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdcAoVivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
