import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdatePessoaComponent } from './update.component';

describe('ModalComponent', () => {
  let component: FormUpdatePessoaComponent;
  let fixture: ComponentFixture<FormUpdatePessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUpdatePessoaComponent]
    });
    fixture = TestBed.createComponent(FormUpdatePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
