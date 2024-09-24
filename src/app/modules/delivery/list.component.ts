/**
 * @file list.component.ts
 * @description Este arquivo contém o componente DeliveryListComponent, responsável por exibir e gerenciar a lista de entregas.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Constants } from '../../core/constants';
import { Delivery } from '../../models/delivery.model';

/**
 * @class DeliveryListComponent
 * @implements {OnInit, OnDestroy}
 * @description Componente para exibir e gerenciar a lista de entregas.
 */
@Component({
  selector: 'app-delivery-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class DeliveryListComponent implements OnInit, OnDestroy {
  /** Array de todas as entregas */
  deliveries: Delivery[] = [];
  /** Array de entregas filtradas */
  filteredDeliveries: Delivery[] = [];
  /** Colunas da tabela de entregas */
  columns: string[] = Constants.DASHBOARD.allDeliveriesColumns;
  /** Colunas exibidas na tabela de entregas */
  displayedColumns: string[] = Constants.DASHBOARD.allDeliveriesDisplayedColumns;

  /** Lista de motoristas para o filtro */
  drivers: string[] = [];
  /** Lista de status de entrega para o filtro */
  deliveryStatuses: string[] = [];
  /** Motorista selecionado no filtro */
  selectedDriver: string = '';
  /** Status selecionado no filtro */
  selectedStatus: string = '';

  /** Subject para gerenciar a destruição do componente */
  private destroy$ = new Subject<void>();

  /**
   * @constructor
   * @param {ActivatedRoute} route - Serviço para acessar informações sobre a rota ativa
   */
  constructor(private route: ActivatedRoute) {}

  /**
   * Inicializa o componente
   */
  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: { deliveries?: Delivery[] }) => {
        if (data && data.deliveries) {
          this.deliveries = data.deliveries;
          this.filteredDeliveries = this.deliveries;
          this.extractFiltersData();
        }
      });
  }

  /**
   * Limpa os recursos ao destruir o componente
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Extrai os dados para os filtros de motorista e status
   */
  extractFiltersData(): void {
    this.drivers = [...new Set(this.deliveries.map(d => d.motorista.nome))];
    this.deliveryStatuses = [...new Set(this.deliveries.map(d => d.status_entrega))];
  }

  /**
   * Aplica os filtros selecionados à lista de entregas
   */
  applyFilters() {
    this.filteredDeliveries = this.deliveries.filter(delivery => {
      const statusMatch = !this.selectedStatus || delivery.status_entrega === this.selectedStatus;
      const driverMatch = !this.selectedDriver || delivery.motorista.nome === this.selectedDriver;
      return statusMatch && driverMatch;
    });
  }
}
