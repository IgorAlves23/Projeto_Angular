import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPessoasCompleta } from 'src/app/interfaces/pessoa-completa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ViaCepService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'form-update-pessoa',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class FormUpdatePessoaComponent implements OnInit {

  form!: FormGroup;
  pessoa: IPessoasCompleta = {
    id: null,
    nome: '',
    endereco: '',
    cep: '',
    cidade: '',
    uf: ''
  };

  constructor(
    private appService: PessoaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private viaCep: ViaCepService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.observePreechimentoCep();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id && !isNaN(Number(id))) {
        this.pessoa.id = Number(id);

        this.appService.getPessoaById(this.pessoa.id).subscribe({
          next: (pessoa) => {
            this.pessoa = pessoa;

            this.form.patchValue({
              nome: pessoa.nome,
              endereco: pessoa.endereco,
              cidade: pessoa.cidade,
              uf: pessoa.uf,
              cep: pessoa.cep
            });

            console.log('Debug - Pessoa carregada da API:', this.pessoa);
          },
          error: (err) => {
            console.error('Erro ao buscar pessoa:', err);
          }
        });
      }
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });
  }

  observePreechimentoCep() {
    this.form.get('cep')?.valueChanges.subscribe(value => {
      if (value?.length === 8) {
        this.buscarCep();
      }
    });
  }

  buscarCep() {
    const cep = this.form.get('cep')?.value;
    this.viaCep.getEnderecoByCep(cep).subscribe({
      next: (response) => {
        this.form.patchValue({
          endereco: response.logradouro,
          cidade: response.localidade,
          uf: response.uf
        });
      },
      error: (err) => {
        console.error('Erro ao buscar CEP:', err);
      }
    });
  }

  updatePessoas(): void {
    this.pessoa = {
      ...this.pessoa,
      ...this.form.value
    };

    console.log('Debug - Valores atualizados da pessoa antes de enviar:', this.pessoa);

    if (!this.pessoa.nome || !this.pessoa.endereco || !this.pessoa.cidade || !this.pessoa.uf || !this.pessoa.cep) {
      console.warn('Campos faltando:', this.pessoa);
      alert('Todos os campos devem ser preenchidos.');
      return;
    }

    if (this.pessoa.id !== null) {
      this.appService.updatePessoa(this.pessoa).subscribe({
        next: () => {
          console.log('Pessoa atualizada com sucesso', this.pessoa);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro ao atualizar pessoa:', err);
        }
      });
    } else {
      console.warn('ID da pessoa não definido.');
    }
  }
}
