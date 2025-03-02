import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatePessoaComponent } from './create.component';

describe('ModalCreateComponent', () => {
  let component: FormCreatePessoaComponent;
  let fixture: ComponentFixture<FormCreatePessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreatePessoaComponent]
    });
    fixture = TestBed.createComponent(FormCreatePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
