import { Cliente } from './../../models/cliente.model';
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

  URL = "http://localhost:3000/produtos";
  URL2 = "http://localhost:3000/despesas";
  URL3 = "http://localhost:3000/pedidos";
  URL4 = "http://localhost:3000/clientes";

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

  listarCliente(): Observable<any[]>{
    return this.http.get<any[]>(this.URL4);
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

  incluirCliente(cliente : Cliente) : Observable<any>{
    return this.http.post<any>(this.URL4, cliente);
  }

  buscarPorId(id: number) : Observable<Produto>{
    return this.http.get<Produto>(this.URL + "/" + id);
  }

  buscarDespesaPorId(id: number) : Observable<Despesas>{
    return this.http.get<Despesas>(this.URL2 + "/" + id);
  }

  buscarPedidoPorId(id: number) : Observable<Pedido>{
    return this.http.get<Pedido>(this.URL3 + "/" + id);
  }

  buscarClientePorId(id: number) : Observable<Cliente>{
    return this.http.get<Cliente>(this.URL4 + "/" + id);
  }

  atualizar(idAtualizar: number, produtoAlterado: Produto) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, produtoAlterado);
  }

  atualizarDespesa(idAtualizar: number, despesaAlterada: Despesas) : Observable<any> {
    return this.http.put<any>(this.URL2 + "/" + idAtualizar, despesaAlterada);
  }

  atualizarPedido(idAtualizar: number, pedidoAlterado: Pedido) : Observable<any> {
    return this.http.put<any>(this.URL3 + "/" + idAtualizar, pedidoAlterado);
  }

  atualizarCliente(idAtualizar: number, clienteAlterado: Cliente) : Observable<any> {
    return this.http.put<any>(this.URL4 + "/" + idAtualizar, clienteAlterado);
  }

  excluir(id: number) : Observable<Produto> {
    return this.http.delete<any>(this.URL + "/" + id);
  }

  excluirDespesa(id: number) : Observable<Despesas> {
    return this.http.delete<any>(this.URL2 + "/" + id);
  }

  excluirPedido(id: number) : Observable<Pedido> {
    return this.http.delete<any>(this.URL3 + "/" + id);
  }

  excluirCliente(id: number) : Observable<Cliente> {
    return this.http.delete<any>(this.URL4 + "/" + id);
  }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
