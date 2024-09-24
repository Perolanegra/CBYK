# Carrier - Aplicativo de Gerenciamento Logístico

Carrier é um aplicativo moderno de gerenciamento logístico baseado em Angular, projetado para otimizar operações de entrega. Este projeto demonstra as melhores práticas no desenvolvimento Angular, incluindo arquitetura modular, design responsivo e gerenciamento eficiente de estado.

## Funcionalidades

- **Painel de Controle**: Fornece uma visão geral das entregas em andamento, entregas malsucedidas e entregas por bairro.
- **Lista de Entregas**: Permite aos usuários visualizar, filtrar e gerenciar todas as entregas no sistema.
- **Design Responsivo**: Garante uma experiência perfeita em vários tamanhos de dispositivos.
- **Material Design**: Utiliza Angular Material para uma interface de usuário consistente e moderna.

## Stack Tecnológica

- Angular 18.2.5
- Angular Material
- RxJS
- TypeScript

## Começando

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm (vem com o Node.js)

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/carrier.git
   cd carrier
   ```

2. Instale as dependências:
   ```
   npm install
   ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

1. Abra um terminal e navegue até o diretório do projeto.

2. Execute o seguinte comando:
   ```
   npm run start
   ```

3. Aguarde a compilação ser concluída. Você deverá ver uma mensagem como **Angular Live Development Server está ouvindo em localhost:4200, abra seu navegador em http://localhost:4200/**.

4. Abra seu navegador web e navegue até `http://localhost:4200/`.

5. A aplicação será carregada em seu navegador. Você deverá ver a página inicial do aplicativo Carrier.

6. Conforme você faz alterações no código-fonte, a aplicação será automaticamente recarregada no navegador.

7. Para parar o servidor de desenvolvimento, pressione `Ctrl + C` no terminal onde npm run start está sendo executado.

### Opções Adicionais de Execução

- Para executar a aplicação em uma porta diferente:
  ```
  npm run start --port 4201
  ```

- Para abrir o navegador automaticamente quando o servidor iniciar:
  ```
  npm run start --open
  ```

- Para usar uma configuração específica (por exemplo, produção):
  ```
  npm run start --configuration=production
  ```

## Estrutura do Projeto

- `src/app/core`: Contém funcionalidades principais e constantes.
- `src/app/modules`: Módulos de funcionalidades (Painel de Controle, Entrega).
- `src/app/services`: Serviços de toda a aplicação.
- `src/app/shared`: Componentes, diretivas e pipes compartilhados.
- `src/app/models`: Modelos de dados e interfaces.

## Componentes Principais

- Componente Home: Ponto de entrada da aplicação.
- Componente Dashboard: Exibe estatísticas de entrega.
- Componente Lista de Entregas: Gerencia a lista de entregas com capacidades de filtragem.

## Testes

Para executar os testes unitários e verificar a cobertura de código, siga estas etapas:

1. Execute o comando de teste com cobertura:
   ```
   npm run test
   ```

2. Este comando executará todos os testes unitários e gerará um relatório de cobertura.

3. Após a conclusão dos testes, você verá um resumo da cobertura no terminal, semelhante a este:
   ```
   --------------------|---------|----------|---------|---------|-------------------
   File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
   --------------------|---------|----------|---------|---------|-------------------
   All files           |   85.71 |    83.33 |   88.89 |   85.71 |                   
    app.component.ts   |     100 |      100 |     100 |     100 |                   
    ...                |   ...   |    ...   |   ...   |   ...   | ...
   --------------------|---------|----------|---------|---------|-------------------
   ```

4. Para uma visualização mais detalhada, abra o arquivo de relatório HTML gerado:
   - Navegue até a pasta `coverage` na raiz do projeto.
   - Abra o arquivo `index.html` em seu navegador.

5. Este relatório HTML fornece uma visão interativa e detalhada da cobertura de código, permitindo que você explore quais partes do código estão cobertas pelos testes e quais precisam de mais atenção.

6. Lembre-se de que o projeto está configurado com um limiar mínimo de cobertura de 80% para branches, funções, linhas e declarações. Se a cobertura cair abaixo desse limiar, o comando de teste falhará, indicando áreas que precisam de mais testes.

7. Para adicionar ou modificar testes, navegue até a pasta correspondente ao componente ou serviço que você está testando e procure por arquivos com a extensão `.spec.ts`.

Manter uma boa cobertura de testes é essencial para garantir a qualidade e a confiabilidade do código. Certifique-se de escrever testes para novas funcionalidades e manter os testes existentes atualizados conforme o código evolui.

