import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdcNaoCadastradoComponent } from './bdc-nao-cadastrado.component';

describe('BdcNaoCadastradoComponent', () => {
  let component: BdcNaoCadastradoComponent;
  let fixture: ComponentFixture<BdcNaoCadastradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdcNaoCadastradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdcNaoCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
