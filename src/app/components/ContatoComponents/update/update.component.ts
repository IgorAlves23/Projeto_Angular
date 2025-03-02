import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContatos } from 'src/app/interfaces/contatos';
import { TipoContato } from 'src/app/interfaces/tipo-contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class FormUpdateComponent {

  tiposContato = Object.values(TipoContato);
  contatos: IContatos = {
    id: null,
    nome: '',
    tipoContato: TipoContato.CELULAR,
    contato: '',
    pessoa: { id: null }
  };

  constructor(
    private appService: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id && !isNaN(Number(id))) {
        this.contatos.id = Number(id);

        this.appService.getContatoById(this.contatos.id).subscribe({
          next: (contato) => {
            // Garante que o tipoContato seja do enum
            this.contatos = {
              ...contato,
              tipoContato: contato.tipoContato as TipoContato
            };
          },
          error: (err) => {
            console.error('Erro ao buscar pessoa:', err);
          }
        });
      }
    });
  }

  updateContato(): void {
    if (!this.contatos.nome || !this.contatos.tipoContato || !this.contatos.contato) {
      alert('Todos os campos devem ser preenchidos.');
      return;
    }

    if (this.contatos.id !== null) {
      this.appService.updateContato(this.contatos).subscribe({
        next: () => {
          console.log('Pessoa atualizada com sucesso', this.contatos);
          this.router.navigate(['/listaContatos']);
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
