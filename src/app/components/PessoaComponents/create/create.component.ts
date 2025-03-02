import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IPessoasCompleta } from 'src/app/interfaces/pessoa-completa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ViaCepService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class FormCreatePessoaComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appService: PessoaService,
    private router: Router,
    private viaCep: ViaCepService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.observePreechimentoCep();
  }

  initializeForm() {
    this.form = this.fb.group({
      nome: [''],
      endereco: [''],
      cidade: [''],
      uf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      cep: ['', [Validators.required]]
    });
  }

  observePreechimentoCep() {
    this.form.get('cep')?.valueChanges.subscribe(value => {
      if(value?.length === 8) {
        this.buscarCep();
      }
      });
    };

  buscarCep() {
    var cep = this.form.get('cep')?.value;
    this.viaCep.getEnderecoByCep(cep).subscribe(
      {
        next: (response) => {
          this.form.patchValue({
            endereco: response.logradouro,
            cidade: response.localidade,
            uf: response.uf
          });
        },
        error: (err) => {
          console.error('Erro ao buscar cep:', err);
        }
      }
    )
  }

  createPessoas(): void {
    if (this.form.invalid) {
      alert('Todos os campos devem ser preenchidos corretamente.');
      return;
    }

    const pessoa: IPessoasCompleta = this.form.value; // ✅ Pegando os valores corretos do formulário

    this.appService.create(pessoa).subscribe({
      next: () => {
        console.log('Pessoa criada com sucesso', pessoa);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao criar pessoa:', err);
      }
    });
  }
}
