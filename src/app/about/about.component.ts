import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-about',
  template: `
    <h2>Sobre esta aplicação</h2>
    <p>
      Projeto Angular refatorado com Lazy Loading moderno e Standalone
      Components.
    </p>
  `,
})
export class AboutComponent {}
