import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private snackBar : MatSnackBar, private http: HttpClient) { }

  URL_CADASTRO = "http://localhost:3000/produtos";

  listar() : Observable<Produto[]> {
    let response = this.http.get<Produto[]>(this.URL_CADASTRO);
    return response;
  }

  buscarPorId(id : number) : Observable<Produto> {
    const path = `${this.URL_CADASTRO}/${id}`;
    return this.http.get<Produto>(path);
  }

  salvar(produto : Produto) : Observable<any> {
    return this.http.post<Produto>(this.URL_CADASTRO, produto);
  }

  atualizar(produto : Produto) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${produto.id}`;
    return this.http.put<Produto>(path, produto);
  }

  excluir(id? : number) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${id}`;
    return this.http.delete<Produto>(path);
  }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}


