import { PessoaService } from './../../../services/pessoa.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IContatos } from 'src/app/interfaces/contatos';
import { IPessoas } from 'src/app/interfaces/pessoa';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListContactsComponent {

  @Input() contatos: IContatos[] = [];

  constructor(private appService: ContatoService, private router: Router) {}

  getPessoaNome(contato: any): string {
    return contato.pessoa ? contato.pessoa.nome : 'Sem pessoa';
  }

  delete(id: number): void {
    if (id) {
      this.appService.deleteContato(id).subscribe({
        next: () => {
          console.log(`Pessoa com ID ${id} excluída com sucesso`);
          this.contatos = this.contatos.filter(contato => contato.id !== id);
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
