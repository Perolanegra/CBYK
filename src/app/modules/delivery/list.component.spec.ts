/**
 * @file list.component.spec.ts
 * @description Testes unitários para o componente DeliveryListComponent
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DeliveryListComponent } from './list.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../../shared/components/table/table.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { Delivery } from '../../models/delivery.model';
import { MaterialModule } from '../../shared/modules/material/material.module';

/**
 * Suite de testes para o DeliveryListComponent
 */
describe('DeliveryListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;
  let mockActivatedRoute: any;

  /**
   * Dados simulados de entregas para testes
   * @type {Delivery[]}
   */
  const mockDeliveries: Delivery[] = [
    {
      id: '1',
      documento: 'DOC123',
      motorista: { nome: 'John Doe' },
      cliente_origem: {
        nome: 'Client 1',
        endereco: 'Endereco 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
      },
      cliente_destino: {
        nome: 'Client 2',
        endereco: 'Endereco 2',
        bairro: 'Bairro 2',
        cidade: 'Cidade 2',
      },
      status_entrega: 'Em andamento',
    },
    // Adicione mais entregas simuladas se necessário
  ];

  /**
   * Configuração inicial antes de cada teste
   */
  beforeEach(async () => {
    mockActivatedRoute = {
      data: of({ deliveries: mockDeliveries }),
    };

    await TestBed.configureTestingModule({
      declarations: [DeliveryListComponent],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        TableComponent,
        NoopAnimationsModule,
      ],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Teste: Deve criar o componente
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Teste: Deve inicializar os dados do resolver de rota
   */
  it('should initialize data from route resolver', () => {
    expect(component.deliveries).toEqual(mockDeliveries);
    expect(component.filteredDeliveries).toEqual(mockDeliveries);
  });

  /**
   * Teste: Deve extrair corretamente os dados dos filtros
   */
  it('should extract filters data correctly', () => {
    component.extractFiltersData();
    expect(component.drivers).toEqual(['John Doe']);
    expect(component.deliveryStatuses).toEqual(['Em andamento']);
  });

  /**
   * Teste: Deve aplicar os filtros corretamente
   */
  it('should apply filters correctly', () => {
    component.selectedStatus = 'Em andamento';
    component.applyFilters();
    expect(component.filteredDeliveries).toEqual([mockDeliveries[0]]);
  });

  /**
   * Teste: Deve cancelar a inscrição ao destruir
   */
  it('should unsubscribe on destroy', () => {
    jest.spyOn(component['destroy$'], 'next');
    jest.spyOn(component['destroy$'], 'complete');
    component.ngOnDestroy();
    expect(component['destroy$'].next).toHaveBeenCalled();
    expect(component['destroy$'].complete).toHaveBeenCalled();
  });
});
