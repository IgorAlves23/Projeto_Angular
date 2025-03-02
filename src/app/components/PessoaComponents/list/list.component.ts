import { PessoaService } from './../../../services/pessoa.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IContatos } from 'src/app/interfaces/contatos';
import { IPessoas } from 'src/app/interfaces/pessoa';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() pessoas: IPessoas[] = [];

  constructor(private appService: PessoaService, private router: Router) {}

  @Input() contatos: IContatos[] = [];

  getPessoaNome(contato: any): string {
    return contato.pessoa ? contato.pessoa.nome : 'Sem pessoa';
  }

  delete(id: number): void {
    if (id) {
      this.appService.deletePessoas(id).subscribe({
        next: () => {
          console.log(`Pessoa com ID ${id} excluída com sucesso`);
          // Atualiza a lista de pessoas localmente
          this.pessoas = this.pessoas.filter(pessoa => pessoa.id !== id);
        },
        error: (err) => {
          console.error('Erro ao excluir pessoa:', err);
        }
      });
    } else {
      console.warn('ID da pessoa não definido. Não é possível excluir.');
    }
  }
}
