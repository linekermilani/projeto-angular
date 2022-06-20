import { Produto } from './produto.model';
import { Cliente } from './cliente.model';
export class Pedido {
    
    id: number = 0;
    data: Date = new Date();
    cliente: Cliente = new Cliente();
    produto: Produto = new Produto();
    valor: number = 0;
}