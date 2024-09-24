/**
 * Classe Constants contendo constantes e configurações utilizadas em toda a aplicação.
 */
export class Constants {
  /**
   * A versão atual da aplicação.
   */
  static APP_VERSION = "v.0.0.0";

  /**
   * O número de build atual da aplicação.
   */
  static APP_BUILD_NUMBER = "b.0.0";

  /**
   * Objeto de configuração contendo várias configurações e constantes usadas em toda a aplicação.
   */
  static readonly config = {
    /**
     * Objeto para armazenar constantes relacionadas a imagens (atualmente vazio).
     */
    imgs: {},

    /**
     * Objeto para armazenar constantes relacionadas a rotas (atualmente vazio).
     */
    routes: {},

    /**
     * Configuração relacionada à autenticação.
     */
    auth: {
      /**
       * O escopo do token usado para autenticação da API.
       */
      token_scope: ''
    },

    /**
     * Várias variáveis de configuração usadas na aplicação.
     */
    vars: {
      /**
       * Constantes de texto usadas na aplicação.
       */
      text: {
        /**
         * Texto para o botão de navegação para o painel.
         */
        navigate_to_dashboard_btn: "Ir para o Dashboard",
        /**
         * Texto de boas-vindas exibido para o usuário.
         */
        welcome_text: "Bem-vindo ao Carrier",
        /**
         * Subtexto para a mensagem de boas-vindas.
         */
        welcome_text_sub: "Sua solução de gerenciamento em logística de transporte.",
      },
    },

    /**
     * Configurações de endpoints da API REST (atualmente vazio).
     */
    rest: {

    },
  };

  /**
   * Constantes relacionadas ao componente Dashboard.
   */
  static readonly DASHBOARD = {
    /**
     * Chaves das colunas para a tabela de entregas do motorista.
     */
    driverDeliveriesColumns: ['driverName', 'totalDeliveries', 'completedDeliveries'],
    /**
     * Nomes de exibição para as colunas da tabela de entregas do motorista.
     */
    driverDeliveriesDisplayedColumns: ['Nome Motorista', 'Saiu para entregar', 'Entregues'],

    /**
     * Chaves das colunas para a tabela de entregas mal-sucedidas.
     */
    unsuccessfulDeliveriesColumns: ['driverName', 'unsuccessfulDeliveries'],
    /**
     * Nomes de exibição para as colunas da tabela de entregas mal-sucedidas.
     */
    unsuccessfulDeliveriesDisplayedColumns: ['Nome do Motorista', 'Entregas sem Sucesso'],

    /**
     * Chaves das colunas para a tabela de entregas por bairro.
     */
    neighborhoodDeliveriesColumns: ['neighborhoodName', 'totalDeliveries', 'completedDeliveries'],
    /**
     * Nomes de exibição para as colunas da tabela de entregas por bairro.
     */
    neighborhoodDeliveriesDisplayedColumns: ['Bairro', 'Total de Entregas', 'Entregas Concluídas'],

    /**
     * Chaves das colunas para a tabela de todas as entregas.
     */
    allDeliveriesColumns: ['id', 'documento', 'motorista.nome', 'cliente_origem.nome', 'cliente_destino.nome', 'status_entrega'],
    /**
     * Nomes de exibição para as colunas da tabela de todas as entregas.
     */
    allDeliveriesDisplayedColumns: ['ID', 'Documento', 'Motorista', 'Cliente Origem', 'Cliente Destino', 'Status']
  };
}
