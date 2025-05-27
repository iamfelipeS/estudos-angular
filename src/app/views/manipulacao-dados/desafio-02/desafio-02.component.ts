import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio-02',
  imports: [CommonModule, FormsModule,],
  templateUrl: './desafio-02.component.html',
  styleUrl: './desafio-02.component.scss'
})
export class Desafio02Component {
  valorProduto: number = 0;
  valorComDesconto: number = 0;
  descontoPercentual: number = 10;

produtoComDesconto() {
  if (this.descontoPercentual > 100) {
    this.descontoPercentual = 100;
  }
  const fatorDesconto = 1 - this.descontoPercentual / 100;
  this.valorComDesconto = this.valorProduto * fatorDesconto;
}


}
