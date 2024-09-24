/**
 * @file request.service.ts
 * @description Este serviço lida com todas as requisições para a aplicação.
 */

import { Injectable } from '@angular/core';
import { Observable, map, of, shareReplay } from 'rxjs';
import { Delivery } from '../models/delivery.model';
import deliveries from '../mock/api.json';

/**
 * @class RequestService
 * @description Serviço responsável por gerenciar as requisições de dados da aplicação.
 */
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor() {}

  /**
   * Obtém todas as entregas.
   * @returns {Observable<Delivery[]>} Um Observable contendo um array de entregas.
   */
  public getDeliveries(): Observable<Delivery[]> {
    return of(deliveries);
  }

  /**
   * Obtém as entregas em andamento, agrupadas por motorista.
   * @returns {Observable<any[]>} Um Observable contendo um array de objetos com informações de entregas por motorista.
   */
  public getOnGoingDeliveries(): Observable<any[]> {
    return this.getDeliveries().pipe(
      map((deliveries) => {
        const driverDeliveries: { [key: string]: any } = {};
        deliveries.forEach((d) => {
          if (d.status_entrega === 'PENDENTE' || d.status_entrega === 'ENTREGUE') {
            if (!driverDeliveries[d.motorista.nome]) {
              driverDeliveries[d.motorista.nome] = { totalDeliveries: 0, completedDeliveries: 0 };
            }
            driverDeliveries[d.motorista.nome].totalDeliveries++;
            if (d.status_entrega === 'ENTREGUE') {
              driverDeliveries[d.motorista.nome].completedDeliveries++;
            }
          }
        });
        return Object.entries(driverDeliveries).map(([driverName, stats]) => ({
          driverName,
          totalDeliveries: stats.totalDeliveries,
          completedDeliveries: stats.completedDeliveries
        }));
      }),
      shareReplay(1)
    );
  }

  /**
   * Obtém as entregas mal-sucedidas, agrupadas por motorista.
   * @returns {Observable<any[]>} Um Observable contendo um array de objetos com informações de entregas mal-sucedidas por motorista.
   */
  public getUnsuccessfulDeliveries(): Observable<any[]> {
    return this.getDeliveries().pipe(
      map((deliveries) => {
        const unsuccessfulDeliveries: { [key: string]: number } = {};
        deliveries.forEach((d) => {
          if (d.status_entrega === 'INSUCESSO') {
            unsuccessfulDeliveries[d.motorista.nome] = (unsuccessfulDeliveries[d.motorista.nome] || 0) + 1;
          }
        });
        return Object.entries(unsuccessfulDeliveries).map(([driverName, unsuccessfulDeliveries]) => ({
          driverName,
          unsuccessfulDeliveries
        }));
      }),
      shareReplay(1)
    );
  }

  /**
   * Obtém as entregas agrupadas por bairro.
   * @returns {Observable<any[]>} Um Observable contendo um array de objetos com informações de entregas por bairro.
   */
  public getDeliveriesByHood(): Observable<any[]> {
    return this.getDeliveries().pipe(
      map((deliveries) => {
        const hoodDeliveries: { [key: string]: { total: number, completed: number } } = {};
        deliveries.forEach((d) => {
          const hood = d.cliente_destino.bairro;
          if (!hoodDeliveries[hood]) {
            hoodDeliveries[hood] = { total: 0, completed: 0 };
          }
          hoodDeliveries[hood].total++;
          if (d.status_entrega === 'ENTREGUE') {
            hoodDeliveries[hood].completed++;
          }
        });
        return Object.entries(hoodDeliveries).map(([neighborhoodName, stats]) => ({
          neighborhoodName,
          totalDeliveries: stats.total,
          completedDeliveries: stats.completed
        }));
      }),
      shareReplay(1)
    );
  }
}
