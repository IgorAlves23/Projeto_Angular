import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPessoas } from './../interfaces/pessoa';
import { IPessoasCompleta } from './../interfaces/pessoa-completa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl = 'http://localhost:8080/api/pessoa';


  constructor(private http: HttpClient) {}

  searchPessoas(): Observable<IPessoas[]> {
    return this.http.get<IPessoas[]>(`${this.apiUrl}`);
  }

  getPessoaById(id: number): Observable<IPessoasCompleta> {
    return this.http.get<IPessoasCompleta>(`${this.apiUrl}/${id}`);
  }


  create(pessoa: IPessoasCompleta): Observable<IPessoas> {
    return this.http.post<IPessoas>(`${this.apiUrl}`, pessoa);
  }

  updatePessoa(pessoa: IPessoasCompleta): Observable<IPessoas> {
    const url = `${this.apiUrl}/${pessoa.id}`;
    return this.http.put<IPessoas>(url, pessoa);
  }

  deletePessoas(id: number): Observable<IPessoas> {
    return this.http.delete<IPessoas>(`${this.apiUrl}/${id}`);
  }
}
