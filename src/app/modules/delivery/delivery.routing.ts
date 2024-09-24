/**
 * @file delivery.routing.ts
 * @description Este arquivo contém as configurações de roteamento para o módulo de entrega.
 */

import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryListComponent } from './list.component';
import { RequestService } from '../../services/request.service';

/**
 * @constant routes
 * @description Define as rotas para o módulo de entrega.
 * @type {Routes}
 */
const routes: Routes = [
  {
    path: '',
    component: DeliveryListComponent,
    resolve: {
      /**
       * @property deliveries
       * @description Resolve as entregas antes de carregar o componente.
       * @returns {Promise<any>} Uma promessa que resolve para os dados de entrega.
       */
      deliveries: () => inject(RequestService).getDeliveries()
    }
  }
];

/**
 * @class DeliveryRoutingModule
 * @description Módulo de roteamento para o módulo de entrega.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
