/**
 * Testes para o DashboardComponent
 *
 * Este arquivo contém os testes unitários para o componente Dashboard.
 * Ele verifica a criação do componente, a inicialização de dados e o comportamento de destruição.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from '../../shared/components/table/table.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    // Configura um mock para ActivatedRoute
    mockActivatedRoute = {
      data: of({
        onGoingDeliveries: [{ id: 1, driver: 'John' }],
        unsuccessfulDeliveries: [{ id: 2, reason: 'Address not found' }],
        deliveriesByHood: [{ neighborhood: 'Downtown', count: 5 }],
      }),
    };

    // Configura o módulo de teste
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [MatCardModule, TableComponent, BrowserAnimationsModule, NoopAnimationsModule],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    // Cria o componente e detecta mudanças
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Testa se o componente é criado corretamente
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // Testa se os dados são inicializados corretamente a partir do resolver da rota
  it('deve inicializar os dados do resolver da rota', () => {
    expect(component.driverDeliveries).toEqual([{ id: 1, driver: 'John' }]);
    expect(component.unsuccessfulDeliveries).toEqual([
      { id: 2, reason: 'Address not found' },
    ]);
    expect(component.neighborhoodDeliveries).toEqual([
      { neighborhood: 'Downtown', count: 5 },
    ]);
  });

  // Testa se o componente se desinscreve corretamente ao ser destruído
  it('deve se desinscrever ao ser destruído', () => {
    jest.spyOn(component['destroy$'], 'next');
    jest.spyOn(component['destroy$'], 'complete');
    component.ngOnDestroy();
    expect(component['destroy$'].next).toHaveBeenCalled();
    expect(component['destroy$'].complete).toHaveBeenCalled();
  });
});
