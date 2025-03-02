import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContatosPageComponent } from './pages/contatos/contatos.component';
import { HomePageComponent } from './pages/home/home.component';
import { FormUpdatePessoaComponent } from './components/PessoaComponents/update/update.component';
import { FormCreatePessoaComponent } from './components/PessoaComponents/create/create.component';
import { FormUpdateComponent } from './components/ContatoComponents/update/update.component';
import { FormCadastroComponent } from './components/ContatoComponents/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'listaContatos', component: ListContatosPageComponent
  },
  {
    path: 'editar-pessoa/:id', component: FormUpdatePessoaComponent
  },
  {
    path: 'criar-pessoa', component: FormCreatePessoaComponent
  },
  {
    path: 'editar-contato/:id', component: FormUpdateComponent
  },
  {
    path: 'criar-contato', component: FormCadastroComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
