import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-reforco-01',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reforco-01.component.html',
  styleUrl: './reforco-01.component.scss',
})
export class Reforco01Component implements OnInit {
  produtos: Produto[] = [];

  idProduto = 0;
  marca = '';

  produtoEncontrado: Produto | undefined = undefined;
  existeProdutoSemEstoque: boolean | undefined = undefined;
  existeProdutoDaMarca: boolean | undefined = undefined;

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos', erro);
      },
    });
  }

  buscarProdutoPorId(id: number): void {
    // TODO: implemente a busca do produto.
  }

  possuiProdutoSemEstoque(): void {
    // TODO: implemente a verificação de estoque.
  }

  possuiProdutoDaMarca(marca: string): void {
    // TODO: implemente a verificação da marca.
  }
}
