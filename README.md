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

3. Aguarde a compilação ser concluída. Você deverá ver uma mensagem como "** Angular Live Development Server está ouvindo em localhost:4200, abra seu navegador em http://localhost:4200/ **".

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

Execute testes unitários com:
