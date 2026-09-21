import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';
import { ModalProdutos } from '../../modal-produtos/modal-produtos';

@Component({
  selector: 'app-reforco-01',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalProdutos],
  templateUrl: './reforco-01.component.html',
  styleUrl: './reforco-01.component.scss',
})
export class Reforco01Component implements OnInit {
  produtos: Produto[] = [];

  // modalAberto = false;
  modalAberto = signal(false);
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
    this.produtoEncontrado = this.produtos.find(produto => produto.id === id);
    console.log("produtoEncontrado: ", this.produtoEncontrado)
  }

  possuiProdutoSemEstoque(): void {
    this.existeProdutoSemEstoque = this.produtos.some(produto => produto.estoque === 0);
    console.log("existeProdutoSemEstoque: ", this.existeProdutoSemEstoque)
  }

  possuiProdutoDaMarca(marca: string): void {
    this.existeProdutoDaMarca = this.produtos.some(produto => produto.marca.toLowerCase().trim() === marca.toLowerCase().trim())
    console.log("existeProdutoDaMarca: ", this.existeProdutoDaMarca)
  }

  showProdutos() {
    this.modalAberto.set(true)
    // this.modalAberto = true;
  }
}
