import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private snackBar : MatSnackBar, private http: HttpClient) { }

  URL_CADASTRO = "http://localhost:3000/clientes";

  listar() : Observable<Cliente[]> {
    let response = this.http.get<Cliente[]>(this.URL_CADASTRO);
    return response;
  }

  buscarPorId(id : number) : Observable<Cliente> {
    const path = `${this.URL_CADASTRO}/${id}`;
    return this.http.get<Cliente>(path);
  }

  salvar(cliente : Cliente) : Observable<any> {
    return this.http.post<Cliente>(this.URL_CADASTRO, cliente);
  }

  atualizar(cliente : Cliente) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${cliente.id}`;
    return this.http.put<Cliente>(path, cliente);
  }

  excluir(id? : number) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${id}`;
    return this.http.delete<Cliente>(path);
  }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}


