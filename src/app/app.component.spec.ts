/**
 * @file app.component.spec.ts
 * @description Arquivo de testes para o componente principal da aplicação.
 */

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

/**
 * Suite de testes para o AppComponent
 */
describe('AppComponent', () => {
  /**
   * Configuração inicial antes de cada teste
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
    }).compileComponents();
  });

  /**
   * Teste para verificar se o aplicativo é criado corretamente
   */
  it('deve criar o aplicativo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Teste para verificar se o aplicativo tem o título 'carrier'
   * Nota: Este teste parece estar incompleto, pois não verifica realmente o título
   */
  it(`deve ter o título 'carrier'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
