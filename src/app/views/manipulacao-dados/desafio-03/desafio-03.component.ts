import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

interface FilterOptions {
  nome: string;
  categoria: string;
  marca: string;
  precoMaximo: number | null;
}
@Component({
  selector: 'app-desafio-03',
  standalone: true,
  imports: [CommonModule, FormsModule, PipesModule],
  templateUrl: './desafio-03.component.html',
  styleUrl: './desafio-03.component.scss'
})


export class Desafio03Component implements OnInit {
  marcas: string[] = [];
  produtos: Produto[] = [];
  categorias: string[] = [];
  produtosFiltrados: Produto[] = [];

  filterOptions: FilterOptions = {
    nome: '',
    categoria: '',
    marca: '',
    precoMaximo: null
  }

  private initialFilterOptions: FilterOptions = {
    nome: '',
    categoria: '',
    marca: '',
    precoMaximo: null
  };

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: (response) => {
        this.produtos = response;
      },
      error: (err) => {
        console.log('Erro ao tentar buscar produtos', err)
      }
    });

    this.produtosFiltrados = this.produtos;
    this.categorias = Array.from(new Set(this.produtos.map(produto => produto.categoria)));
    this.marcas = Array.from(new Set(this.produtos.map(produto => produto.marca)));

    // **Salva o estado inicial do filtro.**
    this.initialFilterOptions = { ...this.filterOptions };
  }

  aplicarFiltros() {
    this.produtosFiltrados = this.produtos.filter(produto => {
      return (
        (!this.filterOptions.nome || produto.nome.toLocaleLowerCase().includes(this.filterOptions.nome.toLocaleLowerCase())) &&
        (!this.filterOptions.categoria || produto.categoria.toLocaleLowerCase().includes(this.filterOptions.categoria.toLocaleLowerCase())) &&
        (!this.filterOptions.marca || produto.marca.toLocaleLowerCase().includes(this.filterOptions.marca.toLocaleLowerCase())) &&
        (!this.filterOptions.precoMaximo || produto.preco <= this.filterOptions.precoMaximo)
      )
    })

  }

  clearFilter() {
    this.filterOptions = { ...this.initialFilterOptions };

    // Chama a função de filtro para atualizar a lista
    this.aplicarFiltros();
  }

}
