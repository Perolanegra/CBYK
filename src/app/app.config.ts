/**
 * Configuração da Aplicação Angular
 *
 * Este arquivo contém a configuração principal da aplicação Angular.
 * Ele define os provedores necessários para o funcionamento da aplicação.
 *
 * Importações:
 * - ApplicationConfig e provideZoneChangeDetection do @angular/core
 * - provideRouter do @angular/router
 * - AppRoutes do arquivo local app.routes
 * - provideAnimationsAsync do @angular/platform-browser/animations/async
 *
 * A constante appConfig é exportada como ApplicationConfig e contém:
 *
 * 1. provideZoneChangeDetection: Configura a detecção de mudanças da zona com
 *    coalescência de eventos ativada para melhor desempenho.
 *
 * 2. provideRouter: Configura o roteamento da aplicação usando as rotas
 *    definidas em AppRoutes.
 *
 * 3. provideAnimationsAsync: Habilita o suporte a animações de forma assíncrona.
 */

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(AppRoutes),
    provideAnimationsAsync(),
  ],
};
