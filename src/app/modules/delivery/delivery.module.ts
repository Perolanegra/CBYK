/**
 * @file delivery.module.ts
 * @description Este arquivo contém o DeliveryModule, que é responsável por gerenciar os componentes e serviços relacionados à entrega.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DeliveryListComponent } from './list.component';
import { DeliveryRoutingModule } from './delivery.routing';
import { RequestService } from '../../services/request.service';
import { TableComponent } from '../../shared/components/table/table.component';
import { MatCardModule } from '@angular/material/card';

/**
 * @class DeliveryModule
 * @description Módulo Angular para gerenciar a funcionalidade relacionada à entrega
 */
@NgModule({
  declarations: [
    DeliveryListComponent // Componente para exibir a lista de entregas
  ],
  imports: [
    CommonModule, // Fornece diretivas e pipes comuns do Angular
    MatTableModule, // Módulo de tabela Material para exibir dados em formato de tabela
    MatPaginatorModule, // Paginador Material para lidar com paginação
    MatSortModule, // Módulo de ordenação Material para classificar dados da tabela
    MatSelectModule, // Módulo de seleção Material para seleções em dropdown
    MatFormFieldModule, // Módulo de campo de formulário Material para campos de entrada
    FormsModule, // Módulo de formulários Angular para manipulação de formulários
    DeliveryRoutingModule, // Módulo de roteamento personalizado para rotas relacionadas à entrega
    TableComponent, // Componente de tabela personalizado
    MatCardModule // Módulo de cartão Material para criar layouts baseados em cartões
  ],
  providers: [
    RequestService // Serviço para lidar com requisições HTTP
  ],
})
export class DeliveryModule {}
