import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerradosComponent } from './encerrados.component';

describe('EncerradosComponent', () => {
  let component: EncerradosComponent;
  let fixture: ComponentFixture<EncerradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncerradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncerradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
