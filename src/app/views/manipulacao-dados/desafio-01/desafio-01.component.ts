import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio-01',
  imports: [CommonModule, FormsModule],
  templateUrl: './desafio-01.component.html',
  styleUrl: './desafio-01.component.scss'
})
export class Desafio01Component implements OnInit{
 produtos = [
    { nome: 'Camisa', preco: 100 },
    { nome: 'Calça', preco: 150 },
    { nome: 'Tênis', preco: 200 }
  ]

  arrayDesconto: any[] = [];

  descontoPercentual: number = 10;

  ngOnInit() {
    this.produtoComDesconto(); // ← chama aqui
  }

  produtoComDesconto() {
    const fatorDesconto = 1 - this.descontoPercentual / 100;

    console.log(fatorDesconto)
    this.arrayDesconto = this.produtos.map(produto => ({
      nome: produto.nome,
      precoOriginal: produto.preco,
      precoComDesconto: produto.preco * fatorDesconto

    }));
  }

  
}
