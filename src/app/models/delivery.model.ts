/**
 * Representa uma entrega no sistema.
 */
export interface Delivery {
  /** Identificador único para a entrega */
  id: string;
  /** Número do documento associado à entrega */
  documento: string;
  /** Informações sobre o motorista */
  motorista: {
    /** Nome do motorista */
    nome: string;
  };
  /** Informações sobre o cliente de origem */
  cliente_origem: {
    /** Nome do cliente de origem */
    nome: string;
    /** Endereço do cliente de origem */
    endereco: string;
    /** Bairro do cliente de origem */
    bairro: string;
    /** Cidade do cliente de origem */
    cidade: string;
  };
  /** Informações sobre o cliente de destino */
  cliente_destino: {
    /** Nome do cliente de destino */
    nome: string;
    /** Endereço do cliente de destino */
    endereco: string;
    /** Bairro do cliente de destino */
    bairro: string;
    /** Cidade do cliente de destino */
    cidade: string;
  };
  /** Status atual da entrega */
  status_entrega: string;
}
