/**
 * @file home.component.ts
 * @description Este arquivo contém o componente HomeComponent, responsável pela página inicial da aplicação.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../core/constants';
import { MatRippleModule } from '@angular/material/core';

/**
 * @class HomeComponent
 * @description Componente para a página inicial da aplicação.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
      MatRippleModule
  ]
})
export class HomeComponent {
  /** Constantes da aplicação */
  readonly APP_CONSTANTS = Constants;

  /**
   * @constructor
   * @param {Router} router - Serviço de roteamento do Angular
   */
  constructor(private router: Router) {}

  /**
   * Navega para a página do dashboard
   */
  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  /**
   * Navega para a página de lista de entregas
   */
  navigateToDeliveryList(): void {
    this.router.navigate(['/delivery-list']);
  }
}
