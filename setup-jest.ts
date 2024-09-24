/**
 * @file setup-jest.ts
 * @description Configuração do Jest para testes em Angular
 *
 * Este arquivo contém a configuração necessária para executar testes
 * em um projeto Angular usando o Jest como framework de teste.
 */

// Importa as configurações padrão do Jest para Angular
import 'jest-preset-angular/setup-jest';

/**
 * Adiciona uma implementação mock para a API de animação do navegador
 *
 * Esta configuração é necessária para simular a API de animação do navegador
 * durante os testes, evitando erros relacionados a animações não suportadas
 * no ambiente de teste.
 */
Object.defineProperty(window, 'animate', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    cancel: jest.fn(),
    finished: Promise.resolve(),
    onfinish: null,
    oncancel: null,
    play: jest.fn(),
    pause: jest.fn(),
    finish: jest.fn(),
    reverse: jest.fn(),
  })),
});
