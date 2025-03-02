import { Component, Input } from '@angular/core';
import { IContatos } from 'src/app/interfaces/contatos';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-list-contatos-page',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ListContatosPageComponent {
  contatos: IContatos[] = [];

  constructor(private appServiceService: ContatoService) {}

  ngOnInit() {
    this.appServiceService.searchContatos().subscribe({
      next: (contatos: IContatos[]) => {
        this.contatos = contatos;
        console.log('Retorno pessoas:', this.contatos);
      },
      error: (error) => {
        console.error('Erro ao carregar pessoas:', error.message);
      }
    });
  }
}
