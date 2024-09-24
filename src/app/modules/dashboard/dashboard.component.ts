/**
 * DashboardComponent
 *
 * Este componente é responsável por exibir a visualização do painel da aplicação.
 * Ele mostra várias estatísticas e informações relacionadas às entregas.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Constants } from '../../core/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  /**
   * Array para armazenar dados de entrega do motorista
   * @type {any[]}
   */
  driverDeliveries: any[] = [];

  /**
   * Array para armazenar dados de entregas mal-sucedidas
   * @type {any[]}
   */
  unsuccessfulDeliveries: any[] = [];

  /**
   * Array para armazenar dados de entrega por bairro
   * @type {any[]}
   */
  neighborhoodDeliveries: any[] = [];

  /**
   * Subject para gerenciar a limpeza de inscrições
   * @private
   * @type {Subject<void>}
   */
  private destroy$ = new Subject<void>();

  /**
   * Chaves das colunas para a tabela de entregas do motorista
   * @type {string[]}
   */
  driverDeliveriesColumns = Constants.DASHBOARD.driverDeliveriesColumns;

  /**
   * Nomes de exibição para as colunas da tabela de entregas do motorista
   * @type {string[]}
   */
  driverDeliveriesDisplayedColumns = Constants.DASHBOARD.driverDeliveriesDisplayedColumns;

  /**
   * Chaves das colunas para a tabela de entregas mal-sucedidas
   * @type {string[]}
   */
  unsuccessfulDeliveriesColumns = Constants.DASHBOARD.unsuccessfulDeliveriesColumns;

  /**
   * Nomes de exibição para as colunas da tabela de entregas mal-sucedidas
   * @type {string[]}
   */
  unsuccessfulDeliveriesDisplayedColumns = Constants.DASHBOARD.unsuccessfulDeliveriesDisplayedColumns;

  /**
   * Chaves das colunas para a tabela de entregas por bairro
   * @type {string[]}
   */
  neighborhoodDeliveriesColumns = Constants.DASHBOARD.neighborhoodDeliveriesColumns;

  /**
   * Nomes de exibição para as colunas da tabela de entregas por bairro
   * @type {string[]}
   */
  neighborhoodDeliveriesDisplayedColumns = Constants.DASHBOARD.neighborhoodDeliveriesDisplayedColumns;

  /**
   * @constructor
   * @param {ActivatedRoute} route - O serviço de rota ativada
   */
  constructor(private route: ActivatedRoute) {}

  /**
   * Gancho do ciclo de vida que é chamado após as propriedades vinculadas a dados de uma diretiva serem inicializadas
   * @method ngOnInit
   */
  ngOnInit(): void {
    this.route.data.pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.driverDeliveries = data['onGoingDeliveries'];
      this.unsuccessfulDeliveries = data['unsuccessfulDeliveries'];
      this.neighborhoodDeliveries = data['deliveriesByHood'];
    });
  }

  /**
   * Gancho do ciclo de vida que é chamado quando uma diretiva, pipe ou serviço é destruído
   * @method ngOnDestroy
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
