/**
 * Configuração do Jest para o projeto Angular
 *
 * Este arquivo contém as configurações do Jest para testes em um projeto Angular.
 *
 * @property {string} preset - Define o preset usado para configurar o Jest. Neste caso, é 'jest-preset-angular'.
 *
 * @property {string[]} setupFilesAfterEnv - Array de arquivos a serem executados após o ambiente de teste ser configurado.
 *                                           Aqui, aponta para o arquivo 'setup-jest.ts' na raiz do projeto.
 *
 * @property {string} globalSetup - Configura o setup global do Jest. Usa o setup padrão do 'jest-preset-angular'.
 *
 * @property {Object} coverageThreshold - Define os limiares mínimos de cobertura de código para os testes.
 *   @property {Object} global - Configurações globais de cobertura.
 *     @property {number} branches - Porcentagem mínima de cobertura para branches (80%).
 *     @property {number} functions - Porcentagem mínima de cobertura para funções (80%).
 *     @property {number} lines - Porcentagem mínima de cobertura para linhas de código (80%).
 *     @property {number} statements - Porcentagem mínima de cobertura para declarações (80%).
 *
 * @property {string[]} coverageReporters - Lista de formatos para os relatórios de cobertura.
 *                                          Inclui 'text', 'lcov', 'clover' e 'html'.
 *
 * @property {string} testEnvironment - Define o ambiente de teste. Neste caso, é 'jsdom' para simular um ambiente de navegador.
 */

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  testEnvironment: 'jsdom'
};
