import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ViacepResult } from 'src/app/interfaces/via-cep';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

/*   apiUrl:string = environment.viaCepUrl
 */
  private apiUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  getEnderecoByCep(cep: string) {
    return this.http.get<ViacepResult>
      (this.apiUrl + cep + "/json/")
      .pipe(
        map((response) => {
          return response;
        })
      );

  }
}
