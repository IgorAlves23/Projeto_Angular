import { Component } from '@angular/core';
import { PessoaService } from './services/pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppPessoas';


  constructor(private appServiceService: PessoaService) {}
}
