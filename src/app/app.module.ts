import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/PessoaComponents/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ListContatosPageComponent } from './pages/contatos/contatos.component';
import { HomePageComponent } from './pages/home/home.component';
import { ListContactsComponent } from './components/ContatoComponents/lista/lista.component';
import { FormCreatePessoaComponent } from './components/PessoaComponents/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCadastroComponent } from './components/ContatoComponents/cadastro/cadastro.component';
import { FormUpdateComponent } from './components/ContatoComponents/update/update.component';
import { FormUpdatePessoaComponent } from './components/PessoaComponents/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    ListContatosPageComponent,
    HomePageComponent,
    ListContactsComponent,
    FormCadastroComponent,
    FormUpdateComponent,
    FormUpdatePessoaComponent,
    FormCreatePessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
