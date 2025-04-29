import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, FormsModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit{
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
