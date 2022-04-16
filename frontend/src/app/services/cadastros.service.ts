import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './../../models/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  URL = "http://localhost:3001/produtos";

  constructor(private snackBar : MatSnackBar, private http: HttpClient) { }

  listar(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.URL);
  }

  incluir(produto : Produto) : Observable<any>{
    return this.http.post<any>(this.URL, produto);
  }

  buscarPorId(id: number) : Observable<Produto>{
    return this.http.get<Produto>(this.URL + "/" + id);
  }

  atualizar(idAtualizar: number, produtoAlterado: Produto) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, produtoAlterado);
  }

  excluir(id: number) : Observable<Produto> {
    return this.http.delete<any>(this.URL + "/" + id);
  }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
