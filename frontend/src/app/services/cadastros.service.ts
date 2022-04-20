import { Pedido } from './../../models/pedido.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './../../models/produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Despesas } from 'src/models/despesa.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  URL = "http://localhost:3001/produtos";
  URL2 = "http://localhost:3001/despesas";
  URL3 = "http://localhost:3001/pedidos";

  constructor(private snackBar : MatSnackBar, private http: HttpClient) { }

  listar(): Observable<any[]>{
    return this.http.get<any[]>(this.URL);
  }

  listarDespesas(): Observable<any[]>{
    return this.http.get<any[]>(this.URL2);
  }

  listarPedidos(): Observable<any[]>{
    return this.http.get<any[]>(this.URL3);
  }

  incluirProduto(produto : Produto) : Observable<any>{
    return this.http.post<any>(this.URL, produto);
  }

  incluirDespesa(despesa : Despesas) : Observable<any>{
    return this.http.post<any>(this.URL2, despesa);
  }

  incluirPedido(pedido : Pedido) : Observable<any>{
    return this.http.post<any>(this.URL3, pedido);
  }

  buscarPorId(id: number) : Observable<Produto>{
    return this.http.get<Produto>(this.URL + "/" + id);
  }

  buscarDespesaPorId(id: number) : Observable<Despesas>{
    return this.http.get<Despesas>(this.URL2 + "/" + id);
  }

  atualizar(idAtualizar: number, produtoAlterado: Produto) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, produtoAlterado);
  }

  atualizarDespesa(idAtualizar: number, despesaAlterada: Despesas) : Observable<any> {
    return this.http.put<any>(this.URL2 + "/" + idAtualizar, despesaAlterada);
  }

  excluir(id: number) : Observable<Produto> {
    return this.http.delete<any>(this.URL + "/" + id);
  }

  excluirDespesa(id: number) : Observable<Despesas> {
    return this.http.delete<any>(this.URL2 + "/" + id);
  }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
