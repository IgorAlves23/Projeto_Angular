import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroComponent } from './cadastro.component';

describe('FormCadastroComponent', () => {
  let component: FormCadastroComponent;
  let fixture: ComponentFixture<FormCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCadastroComponent]
    });
    fixture = TestBed.createComponent(FormCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
