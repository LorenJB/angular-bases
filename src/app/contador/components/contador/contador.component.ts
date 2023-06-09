import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h3>La base es: <strong></strong>{{ base }}</h3>
    <button (click)="acumular(base)">+{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)">-{{ base }}</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class ContadorComponent {
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
  reset() {
    this.numero = this.base;
  }
}
