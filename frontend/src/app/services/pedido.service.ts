import { MatSnackBar } from '@angular/material/snack-bar';
import { Pedido } from 'src/models/pedido.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private snackBar : MatSnackBar, private http: HttpClient) { }

  URL_CADASTRO = "http://localhost:3000/pedidos";

  listar() : Observable<Pedido[]> {
    let response = this.http.get<Pedido[]>(this.URL_CADASTRO);
    return response;
  }

  salvar(pedido : Pedido) : Observable<any> {
    return this.http.post<Pedido>(this.URL_CADASTRO, pedido);
  }

  buscarPorId(id : number) : Observable<Pedido> {
    const path = `${this.URL_CADASTRO}/${id}`;
    return this.http.get<Pedido>(path);
  }

  atualizar(pedido : Pedido) : Observable<Pedido> {
    const path = `${this.URL_CADASTRO}/${pedido.id}`;
    return this.http.put<Pedido>(path, pedido);
  }

  excluir(id? : number) : Observable<Pedido> {
    const path = `${this.URL_CADASTRO}/${id}`;
    return this.http.delete<Pedido>(path);
  }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}

