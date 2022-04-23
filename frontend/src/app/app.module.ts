import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './cadastros/produtos/produtos/produtos.component';
import { PedidosComponent } from './cadastros/pedidos/pedidos/pedidos.component';
import { DespesasComponent } from './cadastros/despesas/despesas/despesas.component';
import { IncluirComponent } from './cadastros/produtos/produtos/incluir/incluir.component';
import { ListarComponent } from './cadastros/produtos/produtos/listar/listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from "@angular/material/table";
import { EditarComponent } from './cadastros/produtos/produtos/editar/editar.component';
import { ExcluirComponent } from './cadastros/produtos/produtos/excluir/excluir/excluir.component';
import { EditarComponentDesp } from './cadastros/despesas/despesas/editar/editar/editar.component';
import { IncluirComponentDesp } from './cadastros/despesas/despesas/incluir/incluir/incluir.component';
import { ExcluirComponentDesp } from './cadastros/despesas/despesas/excluir/excluir/excluir.component';
import { IncluirComponentPedidos } from './cadastros/pedidos/pedidos/incluir/incluir/incluir.component';
import { EditarComponentPedido } from './cadastros/pedidos/pedidos/editar/editar/editar.component';
import { ExcluirComponentPedido } from './cadastros/pedidos/pedidos/excluir/excluir/excluir.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutosComponent,
    PedidosComponent,
    DespesasComponent,
    IncluirComponent,
    ListarComponent,
    EditarComponent,
    ExcluirComponent,
    EditarComponentDesp,
    IncluirComponentDesp,
    ExcluirComponentDesp,
    IncluirComponentPedidos,
    EditarComponentPedido,
    ExcluirComponentPedido
  ],
  imports: [
    MatDatepickerModule,
    MatStepperModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
