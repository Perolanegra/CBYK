/**
 * @file app.component.ts
 * @description Este arquivo contém o componente principal da aplicação.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * @class AppComponent
 * @description Componente raiz da aplicação.
 *
 * Este componente serve como o ponto de entrada principal para a aplicação Angular.
 * Ele é responsável por hospedar o router-outlet e quaisquer outros componentes
 * ou lógica que precise estar presente em todas as páginas.
 */
@Component({
  /**
   * O seletor usado para inserir este componente no HTML.
   */
  selector: 'app-root',

  /**
   * Indica que este é um componente autônomo.
   */
  standalone: true,

  /**
   * Lista de importações necessárias para este componente.
   */
  imports: [RouterOutlet],

  /**
   * Caminho para o arquivo de template HTML associado a este componente.
   */
  templateUrl: './app.component.html',

  /**
   * Caminho para o arquivo de estilos SCSS associado a este componente.
   */
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Atualmente, este componente não tem propriedades ou métodos adicionais.
  // Pode ser expandido conforme necessário para incluir lógica compartilhada da aplicação.
}
