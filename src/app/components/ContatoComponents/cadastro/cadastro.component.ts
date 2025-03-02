import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContatos } from 'src/app/interfaces/contatos';
import { IPessoas } from 'src/app/interfaces/pessoa';
import { TipoContato } from 'src/app/interfaces/tipo-contato';
import { ContatoService } from 'src/app/services/contato.service';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class FormCadastroComponent implements OnInit {
  pessoas: IPessoas[] = [];
  pessoaSelecionadaId: number | null = null;

  tiposContato = Object.values(TipoContato);

  contatos: IContatos = {
    id: null,
    nome: '',
    tipoContato: TipoContato.CELULAR,
    contato: '',
    pessoa: { id: null }
  };

  constructor(
    private contatoService: ContatoService,
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.searchPessoas().subscribe({
      next: (data) => {
        this.pessoas = data;
      },
      error: (err) => {
        console.error('Erro ao carregar pessoas:', err);
      }
    });
  }

  createContatos(): void {
    console.log('Lista de pessoas carregadas:', this.pessoas);
    console.log('ID da pessoa selecionada:', this.pessoaSelecionadaId);

    if (!this.contatos.nome || !this.contatos.tipoContato || !this.contatos.contato || !this.pessoaSelecionadaId) {
      alert('Todos os campos devem ser preenchidos.');
      return;
    }

    const pessoaSelecionada = this.pessoas.find(pessoa => pessoa.id === this.pessoaSelecionadaId);
    console.log('Pessoa selecionada encontrada:', pessoaSelecionada);

    if (!pessoaSelecionada) {
      alert('Pessoa selecionada não encontrada.');
      return;
    }

    const contatoParaEnvio: IContatos = {
      id: this.contatos.id,
      nome: this.contatos.nome,
      tipoContato: this.contatos.tipoContato,
      contato: this.contatos.contato,
      pessoa: { id: pessoaSelecionada.id }
    };

    console.log('JSON que será enviado:', contatoParaEnvio);

    this.contatoService.createContato(contatoParaEnvio).subscribe({
      next: () => {
        console.log('Contato criado com sucesso', contatoParaEnvio);
        this.router.navigate(['/listaContatos']);
      },
      error: (err) => {
        console.error('Erro ao criar contato:', err);
      }
    });
  }

}
