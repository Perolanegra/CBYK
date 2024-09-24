/**
 * @file app.routes.ts
 * @description Este arquivo contém as configurações de rotas da aplicação.
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './ui/components/home.component';

/**
 * @constant AppRoutes
 * @type {Routes}
 * @description Define as rotas da aplicação.
 */
export const AppRoutes: Routes = [
  /**
   * Rota para a página inicial.
   */
  {
    path: 'home',
    component: HomeComponent,
  },
  /**
   * Redireciona a rota raiz para a página inicial.
   */
  {
    redirectTo: 'home',
    path: '',
    pathMatch: 'full',
  },
  /**
   * Rota para o painel de controle (dashboard).
   * Carrega o módulo de forma lazy.
   */
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  /**
   * Rota para a lista de entregas.
   * Carrega o módulo de forma lazy.
   */
  {
    path: 'delivery-list',
    loadChildren: () => import('./modules/delivery/delivery.module').then((m) => m.DeliveryModule),
  },
];
