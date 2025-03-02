import { IPessoas } from './../../interfaces/pessoa';
import { Component } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent {

  pessoas: IPessoas[] = [];

  constructor(private appServiceService: PessoaService) {}

  ngOnInit() {
    this.appServiceService.searchPessoas().subscribe({
      next: (pessoas: IPessoas[]) => {
        this.pessoas = pessoas;
        console.log('Retorno pessoas:', this.pessoas);
      },
      error: (error) => {
        console.error('Erro ao carregar pessoas:', error.message);
      }
    });
  }

}
