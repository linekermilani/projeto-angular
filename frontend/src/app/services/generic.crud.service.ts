import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export class GenericCRUDService<T> {


  constructor(protected http: HttpClient, private url: string) { }


  listar() : Observable<T[]> {

    let response = this.http.get<T[]>(this.url);

    return response;

  }


  buscarPorId(id : number) : Observable<T> {

    const path = `${this.url}/${id}`;

    return this.http.get<T>(path);

  }


  salvar(tipo : T) : Observable<any> {

    return this.http.post<T>(this.url, tipo);

  }


  atualizar(id: number, tipo : T) : Observable<any> {

    const path = `${this.url}/${id}`;

    return this.http.put<T>(path, tipo);

  }


  excluir(id? : number) : Observable<any> {

    const path = `${this.url}/${id}`;

    return this.http.delete<T>(path);

  }

}
